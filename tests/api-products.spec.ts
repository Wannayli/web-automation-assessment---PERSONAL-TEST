import { test, expect } from '@playwright/test';

test.describe('Products API tests', () => {

  test('Get all products list', async ({ request }) => {
    const response = await request.get('https://automationexercise.com/api/productsList');

    // Assert the HTTP status code
    expect(response.status()).toBe(200);

    // Parse the JSON response
    const data = await response.json();
    console.log('Products list response:', data);

    // Basic assertions
    expect(data).toHaveProperty('products'); // assuming JSON has a "products" key
    expect(Array.isArray(data.products)).toBe(true); // products should be an array

    // Optionally, check at least one product exists
    expect(data.products.length).toBeGreaterThan(0);
  });

});
