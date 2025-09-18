// browser and page fixture

// browser  - will represent 1 single browser
// page - will represent 1 single page

import {test, expect} from '@playwright/test'

test("Browser Fixture", async ({browser})=>{
    const context = await browser.newContext() // Creates a new browser context.
    const page = await context.newPage() // Creates a new page on the browser context
    await page.goto("https://google.com")
    const page1 = await context.newPage()
    await page1.goto("https://facebook.com")


})

test("Page Fixture", async ({page})=>{
    await page.goto("https://google.com")
    await page.goto("https://facebook.com")

})






// 1. page fixture will automatically create a browser and 1 single page on the browser but for browser fixture we have to create browser context and page manually.

// 2. using a browser fixture we can create multiple pages on the dame browser whereas page fixture will representa single page on the browser.


