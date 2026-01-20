import { Given, When, Then } from '@cucumber/cucumber';
import { expect, webkit } from '@playwright/test';
import { CheckoutPage } from '../../pages/CheckoutPage';


// When('estoy en la página de compra', async function () {
//   this.checkoutPage = new CheckoutPage(this.page);
//   await this.checkoutPage.open();
// });

When('lleno el formulario de compra', async function () {
    await this.checkoutPage.fillForm();
});

Then('el monto total es correcto', async function () {
    await this.checkoutPage.verifyTotalPrice();
});

Then('hago click al boton finalizar', async function () {
    await this.checkoutPage.clickFinishButton();
});

Then('aparece el mensaje de compra exitosa', async function () {
    await this.checkoutPage.verifySuccesfulPurchase();
});