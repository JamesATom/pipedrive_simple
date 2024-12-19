import AppExtensionsSDK from '@pipedrive/app-extensions-sdk';

(async () => {
    try {
        const sdk = await new AppExtensionsSDK({
            identifier: 'deal-creator-app'
        }).initialize();
        
        // Add button after SDK is initialized
        await sdk.execute('ADD_BUTTON', {
            text: 'Create Deal',
            location: 'deal_list_view',
            onClick: async () => {
                await sdk.execute('SHOW_MODAL', {
                    title: 'Create a New Deal',
                    url: 'https://pipedrive-simple.vercel.app/form.html',
                    width: 400,
                    height: 600
                });
            }
        });
    } catch (error) {
        console.error('Failed to initialize:', error);
    }
})();
