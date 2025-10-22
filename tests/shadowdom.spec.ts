// Shadow dom element

import { test, expect } from "@playwright/test";
test("Shadow dom element handling", async ({page})=>{
    await page.goto("https://books-pwakit.appspot.com/explore?q=")
    await page.locator("#input").fill("Testing")
    await page.locator("div.icon").click()
    await expect(page.locator("h2.title").filter({hasText:'Expert MySQL'}))
    .toBeVisible()

})