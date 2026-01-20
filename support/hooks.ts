import { Before, After } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';


const baseURLs = "https://www.saucedemo.com";

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  const context = await this.browser.newContext(
    {
      baseURL: baseURLs
    }
  );
  this.page = await context.newPage();
  this.loginPage = new LoginPage(this.page);
  this.productsPage = new ProductsPage(this.page);
  this.cartPage = new CartPage(this.page);
  this.checkoutPage = new CheckoutPage(this.page);
});

After(async function () {
  await this.page.close();
  await this.browser.close();
});
