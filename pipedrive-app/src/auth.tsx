import React from 'react';

const Auth: React.FC = () => {
  const clientId = '2e59c4c61a365e8c'; // Replace with your Pipedrive Client ID
  const redirectUri = 'https://pipedrive-simple.vercel.app/callback'; // Replace with your callback URL
  const scopes = 'deals:read deals:write'; // Add required scopes

  const authorizeUrl = `https://oauth.pipedrive.com/oauth/authorize`;

  const handleLogin = () => {
    const authUrl = `${authorizeUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scopes}`;
    window.location.href = authUrl; // Redirect user to Pipedrive login page
  };

  return (
    <div>
      <h1>Login with Pipedrive</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Auth;
