import { expect, Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  firstName = '#first-name';
  lastName = '#last-name';
  postalCode = '#postal-code';
  continueButton = '#continue';
  itemPrices = '.inventory_item_price';
  summaryTotal = '.summary_subtotal_label';
  finishButton = '#finish'
  purchaseMessage = '.checkout_complete_container > div'

  async open() {
    await this.page.goto("/checkout.html");
  }

  async fillForm(){
    await this.page.fill(this.firstName, 'test_first_name');
    await this.page.fill(this.lastName, 'test_last_name');
    await this.page.fill(this.postalCode, 'test_postal_code');
    await this.page.click(this.continueButton);
  }

  async verifyTotalPrice(){
    let total = 0;
    let prices = await this.page.locator(this.itemPrices).allTextContents();
    prices.forEach(element => {
        total += parseFloat(element.replace('$',''));
    });
    let checkoutTotal = parseFloat((await this.page.locator(this.summaryTotal).first().textContent()).match(/\d+\.\d+/g)[0]);
    //console.log("el total es: " + total);
    //console.log("el checkouttotal es: " + checkoutTotal);
    await expect(total).toBe(checkoutTotal);
  }

  async clickFinishButton(){
    await this.page.locator(this.finishButton).click();
  }

  async verifySuccesfulPurchase(){
    let messagePurchase = await this.page.locator(this.purchaseMessage).textContent(),
        expectedMessage = 'Your order has been dispatched, and will arrive just as fast as the pony can get there!';

    await expect(messagePurchase).toBe(expectedMessage);
    await this.page.waitForTimeout(3000);
  }

  
}