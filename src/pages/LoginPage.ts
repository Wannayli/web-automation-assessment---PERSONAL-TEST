import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly userNameLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('#password');
    this.signInButton = page.locator('button[type="submit"]');
    this.userNameLabel = page.locator('.account span');
  }

  async gotoLogin() {
    await this.page.goto('https://practicesoftwaretesting.com/auth/login', {
      waitUntil: 'domcontentloaded',
    });
    await this.emailInput.waitFor({ state: 'visible' });
  }

  async login(email: string, password: string) {
    await this.gotoLogin();
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  async getUserName(): Promise<string> {
    return (await this.userNameLabel.textContent()) ?? '';
  }
}
