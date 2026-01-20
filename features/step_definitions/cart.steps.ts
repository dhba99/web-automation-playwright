import { Given, When, Then } from '@cucumber/cucumber';
import { expect, webkit } from '@playwright/test';
import { CartPage } from '../../pages/CartPage';


When('estoy en la página del carrito', async function () {
  this.cartPage = new CartPage(this.page);
  await this.cartPage.open();
});

Then('esta el producto {string} en el carrito', async function (producto: string) {
    await this.cartPage.isVisibleCartItem(producto);
});

When('hago click al boton checkout', async function () {
    await this.cartPage.goToCheckOut();
});