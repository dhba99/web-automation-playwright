import { setWorldConstructor } from '@cucumber/cucumber';
import { Browser, Page } from 'playwright';
import { LoginPage } from '../pages/LoginPage';

export class CustomWorld {
  browser!: Browser;
  page!: Page;
  loginPage: LoginPage;
}

setWorldConstructor(CustomWorld);
