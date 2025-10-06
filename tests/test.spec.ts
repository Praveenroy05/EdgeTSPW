import { test, expect, Page } from '@playwright/test';

let page : Page

test.describe("Title", async ()=>{
    test.beforeAll("BeforeAll", async ({browser})=>{
        const context = await browser.newContext()
        page = await context.newPage()
            await page.goto('https://playwright.dev/');

    })

    test('get started link', async () => {
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    });

    test('get started link1', async () => {
    await page.goto('https://playwright.dev/');
    await expect(page.getByRole('heading', { name: 'Cypress' })).toBeVisible();
    });

    test('get started link2', async () => {
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    });

    test('get started link3', async () => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    });

})

