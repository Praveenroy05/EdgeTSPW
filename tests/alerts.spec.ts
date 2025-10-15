// Alerts or popup - dialog event

// Different types of alerts are available 
// 1. Simple Alert - Alert with single button
// 2. Confirm Alert - Alert with two buttons
// 3. Prompt Alert - Alert with text box and two buttons

// Steps to handle the alerts
// 1. Launch the url
// 2. We have to wait for "dialog" event to appear on the page and write the logic to handle the scenarios.
// 3. Perform the action that will trigger the alert to appear on the page OR identify and click 
// on the element which is responsible for triggering the alert


import { test, expect } from "@playwright/test";

test("Alerts handling", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")
    // on(event, handle) - It is used to listen for the event that is happening on the page
    // waitForEvent() - It is used to wait for the event that is happening on the page

    // Dialog - 
    // accept() - It is used to click on the OK button
    // dismiss() - It is used to click on the Cancel button
    // message() - It is used to get the text of the alert
    // defaultValue() - It is used to get the default value present inside the text box of prompt alert
    // type() - It is used to get the type of alert

    page.on('dialog', async (dialog)=>{
        console.log(dialog.message())
        await dialog.accept()
    })

    await page.locator("#alertButton").click()
})

test("Confirm alerts handling", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")

    page.on('dialog', async (dialog)=>{
        console.log(dialog.message())
        await dialog.dismiss()
    })

    await page.locator("#confirmButton").click()
    await expect(page.locator("#confirmResult")).toHaveText("You selected Cancel")
})


test("Prompt alerts handling", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")

    page.on('dialog', async (dialog)=>{
        console.log(dialog.message())
        await dialog.accept("Testing")
    })

    await page.locator("#promtButton").click()
    await expect(page.locator("#promptResult")).toHaveText("You entered Testing")
})