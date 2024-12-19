import AppExtensionsSDK from '@pipedrive/app-extensions-sdk';

class PipedriveDeals {
    constructor() {
        this.sdk = new AppExtensionsSDK();
        this.initialized = false;
    }

    async initialize() {
        try {
            if (!this.initialized) {
                await this.sdk.initialize();
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
                location: 'deals_details_top_bar', // Change location as needed
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
