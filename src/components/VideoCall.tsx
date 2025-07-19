import React, { useEffect, useState } from 'react';
import {
  StreamVideo,
  StreamVideoClient,
  Call,
  CallControls,
  CallingState,
  ParticipantView,
  StreamCall,
  useCallStateHooks,
  useCall,
} from '@stream-io/video-react-sdk';
import '@stream-io/video-react-sdk/dist/css/styles.css';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mic, MicOff, Video, VideoOff, PhoneOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface VideoCallProps {
  apiKey: string;
  userId: string;
  userName: string;
  userToken: string;
  callId: string;
  onCallEnd: () => void;
}

const VideoCall: React.FC<VideoCallProps> = ({
  apiKey,
  userId,
  userName,
  userToken,
  callId,
  onCallEnd,
}) => {
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const initializeVideo = async () => {
      try {
        // Initialize the StreamVideo client
        const videoClient = new StreamVideoClient({
          apiKey,
          user: {
            id: userId,
            name: userName,
          },
          token: userToken,
        });

        setClient(videoClient);

        // Create or join a call
        const newCall = videoClient.call('default', callId);
        
        // Join the call
        await newCall.join({ create: true });
        setCall(newCall);

        toast({
          title: "Video call started",
          description: "You've successfully joined the video call",
        });
      } catch (error) {
        console.error('Error initializing video call:', error);
        toast({
          title: "Error",
          description: "Failed to initialize video call",
          variant: "destructive",
        });
      }
    };

    initializeVideo();

    return () => {
      if (call) {
        call.leave();
      }
      if (client) {
        client.disconnectUser();
      }
    };
  }, [apiKey, userId, userName, userToken, callId, toast]);

  if (!client || !call) {
    return (
      <Card className="p-6">
        <div className="flex items-center justify-center h-40">
          <div className="animate-pulse">Connecting to video call...</div>
        </div>
      </Card>
    );
  }

  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <VideoCallUI onCallEnd={onCallEnd} />
      </StreamCall>
    </StreamVideo>
  );
};

const VideoCallUI: React.FC<{ onCallEnd: () => void }> = ({ onCallEnd }) => {
  const { useCallCallingState, useParticipants } = useCallStateHooks();
  const callingState = useCallCallingState();
  const participants = useParticipants();
  const call = useCall();
  
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);

  const toggleMic = async () => {
    if (call) {
      if (isMicOn) {
        await call.microphone.disable();
      } else {
        await call.microphone.enable();
      }
      setIsMicOn(!isMicOn);
    }
  };

  const toggleCamera = async () => {
    if (call) {
      if (isCameraOn) {
        await call.camera.disable();
      } else {
        await call.camera.enable();
      }
      setIsCameraOn(!isCameraOn);
    }
  };

  const handleEndCall = async () => {
    if (call) {
      await call.leave();
    }
    onCallEnd();
  };

  if (callingState !== CallingState.JOINED) {
    return (
      <Card className="p-6">
        <div className="flex items-center justify-center h-40">
          <div className="animate-pulse">Joining call...</div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-4 bg-background">
      <div className="space-y-4">
        {/* Video Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[300px]">
          {participants.map((participant) => (
            <div key={participant.sessionId} className="relative rounded-lg overflow-hidden bg-muted">
              <ParticipantView
                participant={participant}
                className="w-full h-full"
              />
              <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                {participant.name || participant.userId}
                {participant.isLocalParticipant && ' (You)'}
              </div>
            </div>
          ))}
        </div>

        {/* Call Controls */}
        <div className="flex items-center justify-center space-x-4">
          <Button
            variant={isMicOn ? "default" : "destructive"}
            size="icon"
            onClick={toggleMic}
            className="rounded-full w-12 h-12"
          >
            {isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
          </Button>

          <Button
            variant={isCameraOn ? "default" : "destructive"}
            size="icon"
            onClick={toggleCamera}
            className="rounded-full w-12 h-12"
          >
            {isCameraOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
          </Button>

          <Button
            variant="destructive"
            size="icon"
            onClick={handleEndCall}
            className="rounded-full w-12 h-12"
          >
            <PhoneOff className="w-5 h-5" />
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          {participants.length} participant{participants.length !== 1 ? 's' : ''} in call
        </div>
      </div>
    </Card>
  );
};

export default VideoCall;