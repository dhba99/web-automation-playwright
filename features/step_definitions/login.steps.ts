import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';


Given('que estoy en la página de login', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.open();
});

When('ingreso usuario {string} y contraseña {string}',
  async function (user: string, pass: string) {
    await this.loginPage.login(user, pass);
  }
);

Then('debo ver los productos', async function () {
  await expect(this.page).toHaveURL(/inventory.html/);
});

Then('aparece mensaje de error {string}', async function (errorMessage: string) {
  let message = await this.loginPage.getErrorMessage();
  await expect(message).toBe(errorMessage);
});
