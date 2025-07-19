
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getQuestionsForQuiz } from '@/data/questions';
import { Question } from '@/data/types';
import EnhancedQuizInterface from '@/components/EnhancedQuizInterface';
import MultiplayerQuizWithVideo from '@/components/MultiplayerQuizWithVideo';
import EnhancedScoreBoard from '@/components/EnhancedScoreBoard';
import { AdaptiveThemeProvider } from '@/components/AdaptiveThemeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, User } from 'lucide-react';

const Grade12Quiz = () => {
  const { subject, chapter, difficulty } = useParams<{ 
    subject: string; 
    chapter: string; 
    difficulty: 'easy' | 'medium' | 'hard' 
  }>();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState({ score: 0, total: 0, chapterName: '' });
  const [quizMode, setQuizMode] = useState<'single' | 'multiplayer' | null>(null);
  const [roomId, setRoomId] = useState<string>('');

  // Sample Stream.io credentials - replace with your actual values
  const streamConfig = {
    apiKey: 'your-stream-api-key',
    userId: `user-${Math.random().toString(36).substr(2, 9)}`,
    userName: `Student ${Math.floor(Math.random() * 1000)}`,
    token: 'your-generated-token' // This should be generated server-side
  };

  useEffect(() => {
    if (subject && chapter && difficulty) {
      const quizQuestions = getQuestionsForQuiz(subject, chapter, difficulty, 10);
      setQuestions(quizQuestions);
    }
  }, [subject, chapter, difficulty]);

  const handleQuizComplete = (score: number, total: number, chapterName: string, diff: string) => {
    setFinalScore({ score, total, chapterName });
    setQuizCompleted(true);
  };

  const handleRetakeQuiz = () => {
    setQuizCompleted(false);
    setFinalScore({ score: 0, total: 0, chapterName: '' });
  };

  const handleBackToChapters = () => {
    navigate(`/grade-12/${subject}`);
  };

  const handleReturnHome = () => {
    navigate('/');
  };

  const generateRoomId = () => {
    return `quiz-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  const handleStartSinglePlayer = () => {
    setQuizMode('single');
  };

  const handleStartMultiplayer = () => {
    const newRoomId = generateRoomId();
    setRoomId(newRoomId);
    setQuizMode('multiplayer');
  };

  const handleJoinRoom = () => {
    if (roomId.trim()) {
      setQuizMode('multiplayer');
    }
  };

  const handleBackToModeSelection = () => {
    setQuizMode(null);
    setRoomId('');
  };

  // Mode Selection Screen
  if (!quizMode) {
    return (
      <AdaptiveThemeProvider>
        <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center p-4">
          <Card className="w-full max-w-md border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground">
                Choose Quiz Mode
              </CardTitle>
              <p className="text-muted-foreground">
                {subject?.replace(/-/g, ' ')} • {chapter?.replace(/-/g, ' ')}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={handleStartSinglePlayer}
                className="w-full h-16 text-lg"
                variant="outline"
              >
                <User className="h-6 w-6 mr-3" />
                Single Player
              </Button>
              
              <Button
                onClick={handleStartMultiplayer}
                className="w-full h-16 text-lg"
              >
                <Users className="h-6 w-6 mr-3" />
                Create Multiplayer Room
              </Button>

              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Enter room code to join..."
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button
                  onClick={handleJoinRoom}
                  disabled={!roomId.trim()}
                  variant="secondary"
                  className="w-full"
                >
                  Join Room
                </Button>
              </div>

              <Button
                onClick={handleBackToChapters}
                variant="ghost"
                className="w-full mt-4"
              >
                Back to Chapters
              </Button>
            </CardContent>
          </Card>
        </div>
      </AdaptiveThemeProvider>
    );
  }

  if (questions.length === 0) {
    return (
      <AdaptiveThemeProvider>
        <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center p-4">
          <div className="text-center animate-pulse">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading Grade 12 questions...</p>
          </div>
        </div>
      </AdaptiveThemeProvider>
    );
  }

  if (quizCompleted) {
    return (
      <AdaptiveThemeProvider>
        <EnhancedScoreBoard
          score={finalScore.score}
          total={finalScore.total}
          subject={subject || 'Mathematics'}
          chapterName={finalScore.chapterName}
          difficulty={difficulty || 'medium'}
          onReturnHome={handleReturnHome}
          onRetakeQuiz={handleRetakeQuiz}
          onBackToChapters={handleBackToChapters}
        />
      </AdaptiveThemeProvider>
    );
  }

  return (
    <AdaptiveThemeProvider>
      {quizMode === 'multiplayer' ? (
        <MultiplayerQuizWithVideo
          roomId={roomId}
          subject={subject || 'Mathematics'}
          chapterId={chapter || 'unit1'}
          difficulty={difficulty || 'medium'}
          questions={questions}
          onComplete={handleQuizComplete}
          onBack={handleBackToModeSelection}
          chapterName={chapter?.replace(/_/g, ' ').replace(/g12|math|unit/gi, '').trim() || 'Chapter'}
          streamApiKey={streamConfig.apiKey}
          streamUserId={streamConfig.userId}
          streamUserName={streamConfig.userName}
          streamToken={streamConfig.token}
        />
      ) : (
        <EnhancedQuizInterface
          subject={subject || 'Mathematics'}
          chapterId={chapter || 'unit1'}
          difficulty={difficulty || 'medium'}
          questions={questions}
          onComplete={handleQuizComplete}
          onBack={handleBackToModeSelection}
          chapterName={chapter?.replace(/_/g, ' ').replace(/g12|math|unit/gi, '').trim() || 'Chapter'}
        />
      )}
    </AdaptiveThemeProvider>
  );
};

export default Grade12Quiz;
