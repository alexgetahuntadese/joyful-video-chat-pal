import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Question } from '@/data/types';

export interface QuizSession {
  id: string;
  room_id: string;
  subject: string;
  chapter: string;
  difficulty: 'easy' | 'medium' | 'hard';
  status: 'waiting' | 'active' | 'completed';
  current_question_index: number;
  current_turn_user_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface SessionParticipant {
  id: string;
  session_id: string;
  user_id: string;
  display_name: string;
  stream_user_id: string;
  stream_token: string;
  score: number;
  is_ready: boolean;
  joined_at: string;
}

export interface QuizAnswer {
  id: string;
  session_id: string;
  user_id: string;
  question_index: number;
  selected_answer: string;
  is_correct: boolean;
  answered_at: string;
}

export const useMultiplayerQuiz = (roomId: string) => {
  const [session, setSession] = useState<QuizSession | null>(null);
  const [participants, setParticipants] = useState<SessionParticipant[]>([]);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Subscribe to real-time updates
  useEffect(() => {
    const channel = supabase
      .channel('quiz-updates')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'quiz_sessions',
          filter: `room_id=eq.${roomId}`
        },
        (payload) => {
          console.log('Session update:', payload);
          if (payload.eventType === 'UPDATE') {
            setSession(payload.new as QuizSession);
          }
        }
      )
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'session_participants'
        },
        (payload) => {
          console.log('Participants update:', payload);
          fetchParticipants();
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'quiz_answers'
        },
        (payload) => {
          console.log('New answer:', payload);
          setAnswers(prev => [...prev, payload.new as QuizAnswer]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [roomId]);

  // Fetch session data
  const fetchSession = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('quiz_sessions')
        .select('*')
        .eq('room_id', roomId)
        .single();

      if (error) throw error;
      setSession(data as QuizSession);
    } catch (err) {
      console.error('Error fetching session:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch session');
    }
  }, [roomId]);

  // Fetch participants
  const fetchParticipants = useCallback(async () => {
    if (!session?.id) return;

    try {
      const { data, error } = await supabase
        .from('session_participants')
        .select('*')
        .eq('session_id', session.id);

      if (error) throw error;
      setParticipants(data || []);
    } catch (err) {
      console.error('Error fetching participants:', err);
    }
  }, [session?.id]);

  // Fetch answers
  const fetchAnswers = useCallback(async () => {
    if (!session?.id) return;

    try {
      const { data, error } = await supabase
        .from('quiz_answers')
        .select('*')
        .eq('session_id', session.id);

      if (error) throw error;
      setAnswers(data || []);
    } catch (err) {
      console.error('Error fetching answers:', err);
    }
  }, [session?.id]);

  // Create a new quiz session
  const createSession = useCallback(async (
    subject: string,
    chapter: string,
    difficulty: 'easy' | 'medium' | 'hard'
  ) => {
    try {
      const { data, error } = await supabase
        .from('quiz_sessions')
        .insert({
          room_id: roomId,
          subject,
          chapter,
          difficulty
        })
        .select()
        .single();

      if (error) throw error;
      setSession(data as QuizSession);
      return data;
    } catch (err) {
      console.error('Error creating session:', err);
      setError(err instanceof Error ? err.message : 'Failed to create session');
      throw err;
    }
  }, [roomId]);

  // Join a session
  const joinSession = useCallback(async (
    sessionId: string,
    userId: string,
    displayName: string,
    streamUserId: string,
    streamToken: string
  ) => {
    try {
      const { data, error } = await supabase
        .from('session_participants')
        .insert({
          session_id: sessionId,
          user_id: userId,
          display_name: displayName,
          stream_user_id: streamUserId,
          stream_token: streamToken
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (err) {
      console.error('Error joining session:', err);
      setError(err instanceof Error ? err.message : 'Failed to join session');
      throw err;
    }
  }, []);

  // Submit an answer
  const submitAnswer = useCallback(async (
    questionIndex: number,
    selectedAnswer: string,
    isCorrect: boolean
  ) => {
    if (!session?.id) return;

    try {
      const { data: user } = await supabase.auth.getUser();
      if (!user.user) throw new Error('User not authenticated');

      const { data, error } = await supabase
        .from('quiz_answers')
        .insert({
          session_id: session.id,
          user_id: user.user.id,
          question_index: questionIndex,
          selected_answer: selectedAnswer,
          is_correct: isCorrect
        })
        .select()
        .single();

      if (error) throw error;

      // Update participant score
      if (isCorrect) {
        const participant = participants.find(p => p.user_id === user.user.id);
        if (participant) {
          await supabase
            .from('session_participants')
            .update({ score: participant.score + 1 })
            .eq('id', participant.id);
        }
      }

      return data;
    } catch (err) {
      console.error('Error submitting answer:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit answer');
      throw err;
    }
  }, [session?.id, participants]);

  // Update session state
  const updateSession = useCallback(async (updates: Partial<QuizSession>) => {
    if (!session?.id) return;

    try {
      const { data, error } = await supabase
        .from('quiz_sessions')
        .update(updates)
        .eq('id', session.id)
        .select()
        .single();

      if (error) throw error;
      setSession(data as QuizSession);
      return data;
    } catch (err) {
      console.error('Error updating session:', err);
      setError(err instanceof Error ? err.message : 'Failed to update session');
      throw err;
    }
  }, [session?.id]);

  // Mark participant as ready
  const markReady = useCallback(async () => {
    try {
      const { data: user } = await supabase.auth.getUser();
      if (!user.user) throw new Error('User not authenticated');

      const participant = participants.find(p => p.user_id === user.user.id);
      if (!participant) throw new Error('Participant not found');

      const { error } = await supabase
        .from('session_participants')
        .update({ is_ready: true })
        .eq('id', participant.id);

      if (error) throw error;
    } catch (err) {
      console.error('Error marking ready:', err);
      setError(err instanceof Error ? err.message : 'Failed to mark ready');
      throw err;
    }
  }, [participants]);

  // Initialize data fetching
  useEffect(() => {
    const initialize = async () => {
      setLoading(true);
      await fetchSession();
      setLoading(false);
    };

    initialize();
  }, [fetchSession]);

  useEffect(() => {
    if (session) {
      fetchParticipants();
      fetchAnswers();
    }
  }, [session, fetchParticipants, fetchAnswers]);

  return {
    session,
    participants,
    answers,
    loading,
    error,
    createSession,
    joinSession,
    submitAnswer,
    updateSession,
    markReady,
    refetch: fetchSession
  };
};