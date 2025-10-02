import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import users from '../test-data/users.json';

test('Login with valid user', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(users.validUser.email, users.validUser.password);

  const username = await loginPage.getUserName();
  expect(username).toBe('Jane Doe');
});
