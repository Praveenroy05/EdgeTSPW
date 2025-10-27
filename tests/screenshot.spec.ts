import {test, expect} from '@playwright/test'

test("Screenshot of a page", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.screenshot({path: 'screenshot/loginPage.png'})
})

test("Screenshot of an element", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("#submit").screenshot({path: 'screenshot/element.jpg'})
})

test("Screenshot of full page", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.screenshot({path : 'screenshot/fullPage.png', fullPage: true})
})