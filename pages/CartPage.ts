import { expect, Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  cartItem = '.cart_item';
  addToCartButton = '[id^="add-to-cart"]';
  removeButton = '[id^="remove"]';
  shoppingCartQuantity = '.shopping_cart_badge'
  goToCheckoutButton = '#checkout';

  async open() {
    await this.page.goto("/cart.html");
  }

  async isVisibleCartItem(productName: string) {
    let cartItemElem = await this.page.locator(this.cartItem)
        .filter({hasText: productName});
    await expect(cartItemElem).toBeVisible();
    return true;
  }

  async goToCheckOut(){
    await this.page.locator(this.goToCheckoutButton).click();
  }

  
}