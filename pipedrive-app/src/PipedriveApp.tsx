import React, { useEffect } from 'react';
import AppExtensionsSDK from '@pipedrive/app-extensions-sdk';

const PipedriveApp: React.FC = () => {
  useEffect(() => {
    const initializeSDK = async () => {
      try {
        const sdk = await new AppExtensionsSDK({
          identifier: 'Custom Deal Creator', // Replace with your app's identifier
        }).initialize();

        console.log('SDK initialized:', sdk);

        // Add a button to the Pipedrive UI
        await sdk.execute('ADD_BUTTON' as any, {
          text: 'Create Deal',
          location: 'deal_list_view', // Change location as needed
          onClick: () => showModal(sdk),
        });

        console.log('Button added successfully');
      } catch (error) {
        console.error('Error initializing SDK:', error);
      }
    };

    const showModal = async (sdk: any) => {
      try {
        await sdk.execute('SHOW_MODAL', {
          title: 'Create a New Deal',
          url: 'https://pipedrive-simple.vercel.app/pipedrive', // Replace with your deployed URL
          width: 400,
          height: 600,
          buttons: [{ label: 'Cancel', action: 'close' }],
        });
      } catch (error) {
        console.error('Error showing modal:', error);
      }
    };

    initializeSDK();
  }, []);

  return <div>Pipedrive Custom App</div>;
};

export default PipedriveApp;
