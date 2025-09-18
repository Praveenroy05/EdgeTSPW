import { test, expect } from '@playwright/test';

test.only('get started link', async ({ page }) => {
   await page.goto('https://playwright.dev/');
   await page.getByRole('link', { name: 'Get started' }).click();
   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test("Login test with valid credential", async function(){
  // await Launch the url
  // await Fill the username
  // await Fill the password
  // await Click on Login button
  // await expect - Verify the login is successful
})


// async- await 

// JS, TS - Asynchronous  - Parallel - 

// Java - Synchronous - sequential - step by step

// Promise - pending, successful , rejected

// To run all the test case inside project - npx playwright test
// To run a single file - npx playwright test tests/filename.spec.ts
// To run a single test case - mark the test as test.only()
// To run a single test case inside the project - npx playwright test --grep "title of the test case"


// browser and page fixture

// Locators - How to write a locator in Playwright