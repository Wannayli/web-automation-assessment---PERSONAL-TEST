import { test, expect, request } from '@playwright/test';

test.describe('API Create/Register User Account', () => {

  test('Create user account with unique email', async () => {
    const apiContext = await request.newContext();

    // Generate a unique email using timestamp
    const email = `user.${Date.now()}@example.com`;

    const formData = {
      name: 'Jane Doe',
      email: email,        // unique email every test run
      password: 'password123',
      title: 'Ms',
      birth_date: '15',
      birth_month: 'May',
      birth_year: '1990',
      firstname: 'Jane',
      lastname: 'Doe',
      company: 'ExampleCorp',
      address1: '123 Main St',
      address2: 'Suite 4',
      country: 'USA',
      zipcode: '12345',
      state: 'California',
      city: 'Los Angeles',
      mobile_number: '1234567890'
    };

    const response = await apiContext.post('https://automationexercise.com/api/createAccount', {
  form: formData
});

const responseBody = await response.json();
console.log('Create account response:', responseBody);

expect(responseBody.responseCode).toBe(201);  // use JSON field
expect(responseBody.message).toBe('User created!');
  });

});
