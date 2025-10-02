import { test, expect } from '@playwright/test';
import users from '../test-data/users.json';

test.describe('API login tests', () => {

  test('API login with valid user', async ({ request }) => {
    const response = await request.post('https://automationexercise.com/api/verifyLogin', {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      form: {
        email: users.validUser.email,
        password: users.validUser.password
      }
    });

    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log('Valid login response:', data);
    expect(data.message).toBe('User exists!');
  });

  test('API login with invalid user', async ({ request }) => {
  const response = await request.post('https://automationexercise.com/api/verifyLogin', {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    form: {
      email: 'invalid@example.com',
      password: 'wrongpassword'
    }
  });

  // The endpoint returns 200 even for invalid users
  expect(response.status()).toBe(200);

  const data = await response.json();
  console.log('Invalid login response:', data);

  // Assert on the response message instead
  expect(data.message).toBe('User not found!');
});

});
