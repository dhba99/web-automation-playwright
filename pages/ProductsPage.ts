import { expect, Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  product = '.inventory_item';
  addToCartButton = '[id^="add-to-cart"]';
  removeButton = '[id^="remove"]';
  goToCartButton = '#shopping_cart_container';
  shoppingCartQuantity = '.shopping_cart_badge'

  async open() {
    await this.page.goto("/inventory.html");
  }

  async addToCart(productName: string) {
    let productItem = await this.page.locator(this.product)
        .filter({hasText: productName});
    await productItem.locator(this.addToCartButton).click();
  }

  async isVisibleRemoveButton(productName: string) {
    let productItem = await this.page.locator(this.product)
        .filter({hasText: productName});
    await expect(productItem.locator(this.removeButton)).toBeVisible();
    return true;
  }

  async getTotalCartItems(){
    return await this.page.locator(this.shoppingCartQuantity).textContent();
  }

  async goToCart(){
    await this.page.locator(this.goToCartButton).click();
  }
  
}