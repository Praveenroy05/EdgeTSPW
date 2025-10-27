// Frames - A web application integrated inside another web application
import { test, expect } from '@playwright/test';

test("Frames handling", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    const inputElement = page.getByPlaceholder("Hide/Show Example")
    await expect(inputElement).toBeVisible()
    await page.locator("#hide-textbox").click()
    await expect(inputElement).not.toBeVisible()
    await expect(inputElement).toBeHidden()

    // frameLocator() - to identify the frame
    const framePage =  await page.frameLocator("#courses-iframe")
    await framePage.getByText("All Access plan").first().click()
    await expect(framePage.locator("div.inner-box")).toHaveText("All Access Subscription")
    await expect(framePage.locator("div.inner-box")).toContainText("Subscription")

    // Switch back to main page
    await page.getByRole('button', {name:'Home'}).click()
    await page.waitForTimeout(3000)
})

test("Nested frames handling", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")
    await page.getByText("Iframe with in an Iframe").click()

    const outerFrame = await page.frameLocator("#Multiple iframe")
    const innerFrame = await outerFrame.frameLocator(".iframe-container iframe")
    await innerFrame.locator("[type='text']").fill("Testing")
    await expect(innerFrame.locator("[type='text']")).toHaveValue("Testing")

    await page.getByText("Single Iframe ").click()

})

// Note: Avoid using frame() method as it is deprecated

// File upload and shadow dow

test("Frames", async ({page})=>{
    await page.goto("https://selectorshub.com/iframe-scenario/")
    const framePage = page.locator('#pact1').first().contentFrame()
    await framePage.locator("#inp_val").fill("CEO")
    await expect(framePage.locator("#inp_val")).toHaveValue("CEO")
})
