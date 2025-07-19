import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Video, VideoOff } from 'lucide-react';
import VideoCall from './VideoCall';
import { Question } from '@/data/types';
import { useToast } from '@/hooks/use-toast';

interface QuizWithVideoProps {
  questions: Question[];
  subject: string;
  chapter: string;
  difficulty: 'easy' | 'medium' | 'hard';
  onComplete: (score: number, total: number) => void;
  // Video call props
  streamApiKey: string;
  currentUserId: string;
  currentUserName: string;
  partnerUserId: string;
  userToken: string;
}

const QuizWithVideo: React.FC<QuizWithVideoProps> = ({
  questions,
  subject,
  chapter,
  difficulty,
  onComplete,
  streamApiKey,
  currentUserId,
  currentUserName,
  partnerUserId,
  userToken,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showVideo, setShowVideo] = useState(true);
  const [isMyTurn, setIsMyTurn] = useState(true);
  const { toast } = useToast();

  const currentQuestion = questions[currentQuestionIndex];
  const callId = `quiz-${subject}-${chapter}-${[currentUserId, partnerUserId].sort().join('-')}`;

  const handleAnswerSelect = (answer: string) => {
    if (!showResult && isMyTurn) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer && isMyTurn) {
      setShowResult(true);
      
      if (selectedAnswer === currentQuestion.correct) {
        setScore(score + 1);
      }

      // Simulate turn switching
      setTimeout(() => {
        setIsMyTurn(false);
        toast({
          title: "Turn switched",
          description: "Waiting for your partner to answer...",
        });
        
        // Simulate partner's turn (in real app, this would be handled by real-time sync)
        setTimeout(() => {
          handleNextQuestion();
        }, 3000);
      }, 2000);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
      setShowResult(false);
      setIsMyTurn(true);
    } else {
      onComplete(score, questions.length);
    }
  };

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  const handleCallEnd = () => {
    setShowVideo(false);
    toast({
      title: "Video call ended",
      description: "Continue with the quiz",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quiz Section */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">
                    {subject} - {chapter}
                  </CardTitle>
                  <Badge variant={isMyTurn ? "default" : "secondary"}>
                    {isMyTurn ? "Your Turn" : "Partner's Turn"}
                  </Badge>
                </div>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                  <Badge variant="outline">{difficulty.toUpperCase()}</Badge>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <h3 className="text-lg font-medium">{currentQuestion?.question}</h3>
                
                <div className="space-y-2">
                  {currentQuestion?.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(option)}
                      disabled={showResult || !isMyTurn}
                      className={`w-full p-3 text-left rounded-lg border-2 transition-all ${
                        selectedAnswer === option
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      } ${(showResult || !isMyTurn) ? 'cursor-not-allowed opacity-60' : ''}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {showResult && (
                  <Card className={`p-4 ${
                    selectedAnswer === currentQuestion.correct 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-red-50 border-red-200'
                  }`}>
                    <div className="space-y-2">
                      <p className="font-medium">
                        {selectedAnswer === currentQuestion.correct ? '✅ Correct!' : '❌ Incorrect'}
                      </p>
                      {selectedAnswer !== currentQuestion.correct && (
                        <p><strong>Correct answer:</strong> {currentQuestion.correct}</p>
                      )}
                      {currentQuestion.explanation && (
                        <p className="text-sm">{currentQuestion.explanation}</p>
                      )}
                    </div>
                  </Card>
                )}

                {isMyTurn && !showResult && (
                  <Button 
                    onClick={handleSubmitAnswer}
                    disabled={!selectedAnswer}
                    className="w-full"
                  >
                    Submit Answer
                  </Button>
                )}

                <div className="text-center text-sm text-muted-foreground">
                  Current Score: {score} / {currentQuestionIndex + (showResult ? 1 : 0)}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Video Section */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Study Partner</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleVideo}
                    className="flex items-center gap-2"
                  >
                    {showVideo ? <VideoOff className="w-4 h-4" /> : <Video className="w-4 h-4" />}
                    {showVideo ? 'Hide Video' : 'Show Video'}
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                {showVideo && streamApiKey && userToken ? (
                  <VideoCall
                    apiKey={streamApiKey}
                    userId={currentUserId}
                    userName={currentUserName}
                    userToken={userToken}
                    callId={callId}
                    onCallEnd={handleCallEnd}
                  />
                ) : (
                  <div className="bg-muted rounded-lg h-[300px] flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Video className="w-12 h-12 mx-auto mb-2" />
                      <p>Video call {showVideo ? 'loading...' : 'disabled'}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizWithVideo;