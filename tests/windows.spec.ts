// Multiple windows - popup events

// Step to handle multiple windows
// 1. Launch the url
// 2. Will wait for "popup" event to appear on the page - page.waitForEvent("popup")
// 3. Identify and click on the element which is responsible for opening the new window
// 4. Will wait for the final result to get from the line #2 by uinsg await condition
// 5. Handle any kind of action on the newly opened window by using the newPage variable
// 6. When we have to switch back to the parent window - use page variable

import { test, expect } from "@playwright/test";

// Promise - Pending, Resolved, Rejected

test("Multiple windows handling", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html")
    const page1 = page.waitForEvent("popup")
    await page.getByText("click", {exact:true}).first().click()
    const newpage = await page1

    await newpage.getByText("Downloads").click()
    await expect(newpage.locator("#bindings")).toContainText("WebDriver Language Bindings")

    await page.bringToFront()

    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
})

test("Multiple windows handling second way", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html")
   
    await page.getByText("click", {exact:true}).first().click()
    const newpage = await page.waitForEvent("popup")

    await newpage.getByText("Downloads").click()
    await expect(newpage.locator("#bindings")).toContainText("WebDriver Language Bindings")

    await page.bringToFront()

    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
})