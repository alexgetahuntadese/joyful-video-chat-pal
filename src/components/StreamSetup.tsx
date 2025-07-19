import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info, Key, Users, Video } from 'lucide-react';

const StreamSetup: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="w-5 h-5" />
            GetStream.io Video Integration Setup
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              Since Lovable doesn't support .env files, use Supabase secrets to store your GetStream credentials securely.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Key className="w-4 h-4" />
                Step 1: Get GetStream Credentials
              </h3>
              <ol className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>1. Go to <a href="https://getstream.io" className="text-primary hover:underline">getstream.io</a></li>
                <li>2. Create an account or login</li>
                <li>3. Create a new app</li>
                <li>4. Get your API Key and Secret from the dashboard</li>
              </ol>
            </div>

            <div className="border-l-4 border-secondary pl-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Users className="w-4 h-4" />
                Step 2: Store Credentials in Supabase
              </h3>
              <ol className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>1. Go to your Supabase project dashboard</li>
                <li>2. Navigate to Settings → Edge Functions → Secrets</li>
                <li>3. Add these secrets:</li>
                <li className="ml-4">• STREAM_API_KEY (your GetStream API key)</li>
                <li className="ml-4">• STREAM_API_SECRET (your GetStream API secret)</li>
              </ol>
            </div>

            <div className="border-l-4 border-accent pl-4">
              <h3 className="font-semibold">Step 3: Usage Example</h3>
              <pre className="mt-2 p-3 bg-muted rounded text-sm overflow-x-auto">
{`import QuizWithVideo from '@/components/QuizWithVideo';

// In your quiz component:
<QuizWithVideo
  questions={questions}
  subject="Biology"
  chapter="Evolution"
  difficulty="easy"
  onComplete={handleQuizComplete}
  streamApiKey="your-stream-api-key"
  currentUserId="user1"
  currentUserName="Student 1"
  partnerUserId="user2"
  userToken="generated-user-token"
/>`}
              </pre>
            </div>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Important Security Note:</strong> The token generation in this demo is simplified. 
              In production, always generate user tokens on your backend using your GetStream API secret.
              Never expose your API secret on the frontend.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
};

export default StreamSetup;