import AppExtensionsSDK from '@pipedrive/app-extensions-sdk';

const sdk = new AppExtensionsSDK({
    identifier: 'deal-creator-app',
    clientId: '2e59c4c61a365e8c',
    clientSecret: 'b4ffa42b62908d569ee5f47ab17eee676c1b9741'
});

(async () => {
    try {
        await sdk.initialize();
        console.log('SDK initialized successfully');
        
        await sdk.execute('ADD_BUTTON', {
            text: 'Create Deal',
            location: 'deal_list_view',
            onClick: async () => {
                await sdk.execute('SHOW_MODAL', {
                    title: 'Create a New Deal',
                    url: 'https://pipedrive-simple.vercel.app/index.html',
                    width: 400,
                    height: 600
                });
            }
        });
    } catch (error) {
        console.error('Failed to initialize:', error);
    }
})();

document.getElementById('deal-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
        title: document.getElementById('deal-name').value,
        value: document.getElementById('deal-value').value
    };

    try {
        const result = await sdk.execute('CREATE_DEAL', data);
        if (result.success) {
            alert('Deal created successfully!');
        }
    } catch (error) {
        alert('Error creating deal: ' + error.message);
    }
});
