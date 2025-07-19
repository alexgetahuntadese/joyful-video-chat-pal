-- Create tables for real-time multiplayer quiz sessions
CREATE TABLE public.quiz_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  room_id TEXT NOT NULL UNIQUE,
  subject TEXT NOT NULL,
  chapter TEXT NOT NULL,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard')),
  status TEXT NOT NULL DEFAULT 'waiting' CHECK (status IN ('waiting', 'active', 'completed')),
  current_question_index INTEGER NOT NULL DEFAULT 0,
  current_turn_user_id UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for session participants
CREATE TABLE public.session_participants (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID NOT NULL REFERENCES public.quiz_sessions(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  display_name TEXT NOT NULL,
  stream_user_id TEXT NOT NULL,
  stream_token TEXT NOT NULL,
  score INTEGER NOT NULL DEFAULT 0,
  is_ready BOOLEAN NOT NULL DEFAULT false,
  joined_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(session_id, user_id)
);

-- Create table for quiz answers
CREATE TABLE public.quiz_answers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID NOT NULL REFERENCES public.quiz_sessions(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  question_index INTEGER NOT NULL,
  selected_answer TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  answered_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.quiz_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.session_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_answers ENABLE ROW LEVEL SECURITY;

-- Create policies for quiz_sessions
CREATE POLICY "Users can view sessions they participate in" 
ON public.quiz_sessions 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.session_participants 
    WHERE session_id = quiz_sessions.id 
    AND user_id = auth.uid()
  )
);

CREATE POLICY "Users can create quiz sessions" 
ON public.quiz_sessions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Participants can update session state" 
ON public.quiz_sessions 
FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM public.session_participants 
    WHERE session_id = quiz_sessions.id 
    AND user_id = auth.uid()
  )
);

-- Create policies for session_participants
CREATE POLICY "Users can view participants in their sessions" 
ON public.session_participants 
FOR SELECT 
USING (
  user_id = auth.uid() OR 
  EXISTS (
    SELECT 1 FROM public.session_participants sp2 
    WHERE sp2.session_id = session_participants.session_id 
    AND sp2.user_id = auth.uid()
  )
);

CREATE POLICY "Users can join sessions" 
ON public.session_participants 
FOR INSERT 
WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own participation" 
ON public.session_participants 
FOR UPDATE 
USING (user_id = auth.uid());

-- Create policies for quiz_answers
CREATE POLICY "Users can view answers in their sessions" 
ON public.quiz_answers 
FOR SELECT 
USING (
  user_id = auth.uid() OR 
  EXISTS (
    SELECT 1 FROM public.session_participants 
    WHERE session_id = quiz_answers.session_id 
    AND user_id = auth.uid()
  )
);

CREATE POLICY "Users can submit their own answers" 
ON public.quiz_answers 
FOR INSERT 
WITH CHECK (user_id = auth.uid());

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_quiz_sessions_updated_at
BEFORE UPDATE ON public.quiz_sessions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Enable real-time updates
ALTER TABLE public.quiz_sessions REPLICA IDENTITY FULL;
ALTER TABLE public.session_participants REPLICA IDENTITY FULL;
ALTER TABLE public.quiz_answers REPLICA IDENTITY FULL;

-- Add tables to realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.quiz_sessions;
ALTER PUBLICATION supabase_realtime ADD TABLE public.session_participants;
ALTER PUBLICATION supabase_realtime ADD TABLE public.quiz_answers;