
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import { getQuestionsForQuiz } from '@/data/questions';
import { Question } from '@/data/types';
import EnhancedQuizInterface from '@/components/EnhancedQuizInterface';
import EnhancedScoreBoard from '@/components/EnhancedScoreBoard';
import { AdaptiveThemeProvider } from '@/components/AdaptiveThemeProvider';
import { TranslationProvider } from '@/contexts/TranslationContext';

const Grade12Quiz = () => {
  const { subject, chapter, difficulty } = useParams<{ 
    subject: string; 
    chapter: string; 
    difficulty: 'easy' | 'medium' | 'hard' 
  }>();
  const navigate = useNavigate();

  const [quizCompleted, setQuizCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState({ score: 0, total: 0, chapterName: '' });

  // Optimized with useMemo for faster loading
  const questions = useMemo(() => {
    if (subject && chapter && difficulty) {
      return getQuestionsForQuiz(subject, chapter, difficulty, 10);
    }
    return [];
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

  if (questions.length === 0) {
    return (
      <TranslationProvider>
        <AdaptiveThemeProvider>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
            <div className="text-center animate-pulse">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading Grade 12 questions...</p>
            </div>
          </div>
        </AdaptiveThemeProvider>
      </TranslationProvider>
    );
  }

  if (quizCompleted) {
    return (
      <TranslationProvider>
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
      </TranslationProvider>
    );
  }

  return (
    <TranslationProvider>
      <AdaptiveThemeProvider>
        <EnhancedQuizInterface
          subject={subject || 'Mathematics'}
          chapterId={chapter || 'unit1'}
          difficulty={difficulty || 'medium'}
          questions={questions}
          onComplete={handleQuizComplete}
          onBack={handleBackToChapters}
          chapterName={chapter?.replace(/_/g, ' ').replace(/g12|math|unit/gi, '').trim() || 'Chapter'}
        />
      </AdaptiveThemeProvider>
    </TranslationProvider>
  );
};

export default Grade12Quiz;
