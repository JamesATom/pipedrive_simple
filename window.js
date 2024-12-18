// import AppExtensionsSDK from '@pipedrive/app-extensions-sdk';
import {AppExtensionsSDK} from './node_modules/@pipedrive/app-extensions-sdk/dist/index.js';

class PipedriveDeals {
  constructor() {
    this.sdk = new AppExtensionsSDK();
    this.initialized = false;
  }

  async initialize() {
    if (!this.initialized) {
      await this.sdk.initialize();
      this.initialized = true;
      await this.addButton();
    }
  }

  async addButton() {
    await this.sdk.execute('ADD_BUTTON', {
      text: 'Create Deal',
      location: 'deals_details_top_bar',
      onClick: () => this.showDealModal()
    });
  }

  async showDealModal() {
    await this.sdk.execute('SHOW_MODAL', {
      title: 'Create New Deal',
      url: 'form.html',
      width: 400,
      height: 600,
      buttons: [
        {
          label: 'Cancel',
          action: 'close'
        }
      ]
    });
  }
}

// Initialize the extension
const deals = new PipedriveDeals();
deals.initialize();