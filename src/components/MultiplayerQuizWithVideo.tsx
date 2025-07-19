import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Users, Video, VideoOff, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Question } from '@/data/types';
import { useMultiplayerQuiz } from '@/hooks/useMultiplayerQuiz';
import VideoCall from './VideoCall';
import { usePersonalization } from '@/hooks/usePersonalization';
import PersonalizedProgressRing from './PersonalizedProgressRing';

interface MultiplayerQuizWithVideoProps {
  roomId: string;
  subject: string;
  chapterId: string;
  difficulty: 'easy' | 'medium' | 'hard';
  questions: Question[];
  onComplete: (score: number, total: number, chapterName: string, difficulty: string) => void;
  onBack: () => void;
  chapterName: string;
  // Video call props
  streamApiKey: string;
  streamUserId: string;
  streamUserName: string;
  streamToken: string;
}

const MultiplayerQuizWithVideo: React.FC<MultiplayerQuizWithVideoProps> = ({
  roomId,
  subject,
  chapterId,
  difficulty,
  questions,
  onComplete,
  onBack,
  chapterName,
  streamApiKey,
  streamUserId,
  streamUserName,
  streamToken
}) => {
  const { profile } = usePersonalization();
  const {
    session,
    participants,
    answers,
    createSession,
    joinSession,
    submitAnswer,
    updateSession,
    markReady
  } = useMultiplayerQuiz(roomId);

  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showVideo, setShowVideo] = useState(true);
  const [waitingForPartner, setWaitingForPartner] = useState(true);
  const [isMyTurn, setIsMyTurn] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const currentQuestion = questions[session?.current_question_index || 0];
  const progress = ((session?.current_question_index || 0) / questions.length) * 100;

  // Initialize session
  useEffect(() => {
    const initializeSession = async () => {
      try {
        if (!session) {
          await createSession(subject, chapterId, difficulty);
        }

        if (session) {
          await joinSession(
            session.id,
            streamUserId,
            streamUserName,
            streamUserId,
            streamToken
          );
        }
      } catch (error) {
        console.error('Failed to initialize session:', error);
      }
    };

    initializeSession();
  }, [session, createSession, joinSession, subject, chapterId, difficulty, streamUserId, streamUserName, streamToken]);

  // Check if both players are ready
  useEffect(() => {
    if (participants.length === 2 && participants.every(p => p.is_ready)) {
      setWaitingForPartner(false);
      if (session?.status === 'waiting') {
        updateSession({ status: 'active', current_turn_user_id: participants[0].user_id });
      }
    }
  }, [participants, session, updateSession]);

  // Determine whose turn it is
  useEffect(() => {
    if (session?.current_turn_user_id) {
      setIsMyTurn(session.current_turn_user_id === streamUserId);
    }
  }, [session?.current_turn_user_id, streamUserId]);

  // Timer for questions
  useEffect(() => {
    if (isMyTurn && !showResult && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && isMyTurn) {
      handleSubmitAnswer();
    }
  }, [isMyTurn, showResult, timeLeft]);

  // Reset timer for new questions
  useEffect(() => {
    setTimeLeft(30);
  }, [session?.current_question_index]);

  const handleAnswerSelect = (answer: string) => {
    if (isMyTurn && !showResult) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmitAnswer = useCallback(async () => {
    if (!currentQuestion || !session) return;

    const isCorrect = selectedAnswer === currentQuestion.correct;
    
    try {
      await submitAnswer(
        session.current_question_index,
        selectedAnswer || '',
        isCorrect
      );

      if (isCorrect) {
        setScore(prev => prev + 1);
      }

      setShowResult(true);

      // Switch turns or advance question
      setTimeout(async () => {
        const nextTurnUserId = participants.find(p => p.user_id !== session.current_turn_user_id)?.user_id;
        
        if (nextTurnUserId && session.current_question_index < questions.length - 1) {
          await updateSession({
            current_turn_user_id: nextTurnUserId,
            current_question_index: session.current_question_index + 1
          });
        } else if (session.current_question_index >= questions.length - 1) {
          await updateSession({ status: 'completed' });
          onComplete(score, questions.length, chapterName, difficulty);
        }

        setShowResult(false);
        setSelectedAnswer('');
      }, 2000);
    } catch (error) {
      console.error('Failed to submit answer:', error);
    }
  }, [currentQuestion, session, selectedAnswer, submitAnswer, updateSession, participants, questions.length, score, chapterName, difficulty, onComplete]);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  const handleCallEnd = () => {
    setShowVideo(false);
  };

  const handleMarkReady = async () => {
    try {
      await markReady();
    } catch (error) {
      console.error('Failed to mark ready:', error);
    }
  };

  if (waitingForPartner) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-foreground mb-4">
                Waiting for Study Partner
              </CardTitle>
              <div className="flex justify-center items-center space-x-4">
                <Users className="h-8 w-8 text-primary animate-pulse" />
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Share this room code with a friend: <strong>{roomId}</strong>
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                {participants.length}/2 players joined
              </p>
              {participants.length === 2 && (
                <Button onClick={handleMarkReady} className="mb-4">
                  I'm Ready to Start
                </Button>
              )}
              <Button variant="outline" onClick={onBack}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Chapters
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading questions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quiz Section */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
            <CardHeader className="border-b border-border/10">
              <div className="flex items-center justify-between">
                <Button variant="ghost" onClick={onBack} className="p-2">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <div className="text-center flex-1">
                  <Badge variant="secondary" className="mb-2">
                    {subject} • {chapterName}
                  </Badge>
                  <h1 className="text-xl font-bold text-foreground">
                    Question {(session?.current_question_index || 0) + 1} of {questions.length}
                  </h1>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleVideo}
                    className="flex items-center space-x-1"
                  >
                    {showVideo ? <VideoOff className="h-4 w-4" /> : <Video className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Progress and Timer */}
                <div className="flex items-center justify-between">
                  <div className="flex-1 mr-4">
                    <Progress value={progress} className="h-3" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className={`font-bold ${timeLeft <= 10 ? 'text-destructive' : 'text-foreground'}`}>
                      {timeLeft}s
                    </span>
                  </div>
                </div>

                {/* Turn Indicator */}
                <div className="text-center">
                  <Badge variant={isMyTurn ? "default" : "secondary"}>
                    {isMyTurn ? "Your Turn" : "Partner's Turn"}
                  </Badge>
                </div>

                {/* Question */}
                <div className="bg-secondary/20 rounded-lg p-6">
                  <h2 className="text-lg font-semibold mb-4 text-foreground">
                    {currentQuestion.question}
                  </h2>

                  {/* Answer Options */}
                  <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(option)}
                        disabled={!isMyTurn || showResult}
                        className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                          selectedAnswer === option
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50 hover:bg-secondary/10'
                        } ${!isMyTurn || showResult ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
                      </button>
                    ))}
                  </div>

                  {/* Submit Button */}
                  {isMyTurn && !showResult && (
                    <div className="mt-6">
                      <Button
                        onClick={handleSubmitAnswer}
                        disabled={!selectedAnswer}
                        className="w-full"
                      >
                        Submit Answer
                      </Button>
                    </div>
                  )}

                  {/* Result Display */}
                  {showResult && (
                    <div className="mt-6 text-center">
                      <div className={`inline-flex items-center space-x-2 p-3 rounded-lg ${
                        selectedAnswer === currentQuestion.correct
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {selectedAnswer === currentQuestion.correct ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          <XCircle className="h-5 w-5" />
                        )}
                        <span className="font-medium">
                          {selectedAnswer === currentQuestion.correct ? 'Correct!' : 'Incorrect'}
                        </span>
                      </div>
                      {selectedAnswer !== currentQuestion.correct && (
                        <p className="mt-2 text-sm text-muted-foreground">
                          Correct answer: {currentQuestion.correct}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Scores */}
                <div className="grid grid-cols-2 gap-4">
                  {participants.map((participant, index) => (
                    <div key={participant.id} className="text-center p-4 bg-secondary/10 rounded-lg">
                      <h3 className="font-medium text-sm text-muted-foreground">{participant.display_name}</h3>
                      <div className="mt-2">
                        <PersonalizedProgressRing 
                          progress={(participant.score / questions.length) * 100}
                          size="md"
                        />
                      </div>
                      <p className="mt-2 font-bold text-foreground">{participant.score}/{questions.length}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Call Section */}
        <div className="lg:col-span-1">
          {showVideo && (
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm h-fit">
              <CardHeader>
                <CardTitle className="text-lg">Study Partner</CardTitle>
              </CardHeader>
              <CardContent>
                <VideoCall
                  apiKey={streamApiKey}
                  userId={streamUserId}
                  userName={streamUserName}
                  userToken={streamToken}
                  callId={roomId}
                  onCallEnd={handleCallEnd}
                />
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiplayerQuizWithVideo;