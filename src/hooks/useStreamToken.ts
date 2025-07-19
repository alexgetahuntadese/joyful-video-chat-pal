import { useState, useEffect } from 'react';

interface UseStreamTokenProps {
  apiKey: string;
  apiSecret: string;
  userId: string;
}

export const useStreamToken = ({ apiKey, apiSecret, userId }: UseStreamTokenProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generateToken = async () => {
      try {
        setLoading(true);
        setError(null);

        // In production, this should be done on your backend
        // For demo purposes, we'll generate it client-side
        // You should replace this with a call to your backend API
        
        // Using a simple JWT-like approach for demo
        // IMPORTANT: In production, generate tokens on your backend!
        const payload = {
          user_id: userId,
          iat: Math.floor(Date.now() / 1000),
          exp: Math.floor(Date.now() / 1000) + (60 * 60), // 1 hour
        };

        // For demo - replace with actual backend call
        const mockToken = btoa(JSON.stringify(payload));
        setToken(mockToken);
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to generate token');
      } finally {
        setLoading(false);
      }
    };

    if (userId && apiKey && apiSecret) {
      generateToken();
    }
  }, [apiKey, apiSecret, userId]);

  return { token, loading, error };
};

// Backend token generation function (implement this on your server)
export const generateStreamTokenOnBackend = async (userId: string): Promise<string> => {
  // This should be implemented on your backend
  const response = await fetch('/api/stream-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId }),
  });

  if (!response.ok) {
    throw new Error('Failed to generate token');
  }

  const { token } = await response.json();
  return token;
};