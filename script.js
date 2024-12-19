import AppExtensionsSDK from '@pipedrive/app-extensions-sdk';

class PipedriveDeals {
    constructor() {
        // Add custom UI identifier
        this.sdk = new AppExtensionsSDK({
            identifier: 'deal-creator-app',
            clientId: '2e59c4c61a365e8c',
            clientSecret: 'b4ffa42b62908d569ee5f47ab17eee676c1b9741'
        });
        this.initialized = false;
    }

    async initialize() {
        try {
            if (!this.initialized) {
                const sdk = await this.sdk.initialize();
                console.log('SDK initialized successfully');
                this.initialized = true;
                await this.addButton();
            }
        } catch (error) {
            console.error('Error initializing SDK:', error);
        }
    }

    async addButton() {
        try {
            await this.sdk.execute('ADD_BUTTON', {
                text: 'Create Deal',
                location: 'deal_list_view', // Change location as needed
                onClick: () => this.showDealModal()
            });
            console.log('Button added successfully');
        } catch (error) {
            console.error('Error adding button:', error);
        }
    }

    async showDealModal() {
        try {
            await this.sdk.execute('SHOW_MODAL', {
                title: 'Create a New Deal',
                url: 'https://your-app-url.vercel.app/index.html', // Update with your deployed URL
                width: 400,
                height: 600,
                buttons: [
                    { label: 'Cancel', action: 'close' }
                ]
            });
            console.log('Modal shown successfully');
        } catch (error) {
            console.error('Error showing modal:', error);
        }
    }
}

const deals = new PipedriveDeals();
deals.initialize();
