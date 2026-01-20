import { Given, When, Then } from '@cucumber/cucumber';
import { expect, webkit } from '@playwright/test';
import { ProductsPage } from '../../pages/ProductsPage';


When('estoy en la página de productos', async function () {
  this.productsPage = new ProductsPage(this.page);
  await this.productsPage.open();
});

When('añado el producto {string} al carrito', async function (productName: string) {
    await this.productsPage.addToCart(productName);
});

When('hago click al carrito de compras', async function () {
    await this.productsPage.goToCart();
});

Then('el boton \"Add to cart\" cambia a \"Remove\" para el producto {string}', async function (productName: string) {
    await this.productsPage.isVisibleRemoveButton(productName);
});

Then('el total de items del carrito es {string}', async function (total: string) {
    let totalShopCart = await this.productsPage.getTotalCartItems();
    await expect(totalShopCart).toBe(total);
});