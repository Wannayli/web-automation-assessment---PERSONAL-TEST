import { test, expect, request } from '@playwright/test';
import users from '../test-data/users.json';

test.describe('API Delete User Account', () => {
  test('Delete user account with valid credentials', async () => {
    const apiContext = await request.newContext();

    const response = await apiContext.delete('https://automationexercise.com/api/deleteAccount', {
      form: {
        email: users.validUser.email,
        password: users.validUser.password
      }
    });

    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log('Delete account response:', data);
    expect(data.message).toBe('Account deleted!');
  });
});
