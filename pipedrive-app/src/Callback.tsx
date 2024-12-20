import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';

const Callback: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const fetchAccessToken = async (code: string) => {
      try {
        const response = await axios.post('https://oauth.pipedrive.com/oauth/token', {
          grant_type: 'authorization_code',
          code,
          client_id: '2e59c4c61a365e8c', // Replace with your Client ID
          client_secret: 'b4ffa42b62908d569ee5f47ab17eee676c1b9741', // Replace with your Client Secret
          redirect_uri: 'https://pipedrive-simple.vercel.app/callback', // Replace with your callback URL
        });
        console.log('Access Token:', response.data.access_token);

        // Store the access token securely (e.g., localStorage or cookies)
        localStorage.setItem('access_token', response.data.access_token);
      } catch (error) {
        console.error('Error fetching access token:', error);
      }
    };

    const queryParams = queryString.parse(location.search);
    if (queryParams.code) {
      fetchAccessToken(queryParams.code as string);
    }
  }, [location]);

  return <div>Processing login...</div>;
};

export default Callback;
