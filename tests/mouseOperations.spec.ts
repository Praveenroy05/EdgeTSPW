// Mouse Operations:

// click - click()
// Right click - click({button : 'right'})
// Double click - dblclick()
// Scrolling
// Mouse Over
// Drag and Drop

import { test, expect } from "@playwright/test";


test("Right click and Double click", async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    // dblclick() - It will perform double click on an element
    await page.getByText("Double-Click Me To See Alert").dblclick()
    // click({button : 'right'}) - It will perform right click on an element
    await page.getByText("right click me", {exact: true}).click({button :'right'})
    await page.getByText("Paste").first().click({timeout: 10000})
    await page.waitForTimeout(3000)


    // dialog event - It is used to handle the alert, confirm and prompt popups
})

test("Mouse Over on an element", async ({page})=>{
    await page.goto("https://www.spicejet.com/")
    // hover() - It will perform mouse over on an element
    await page.getByText("Add-ons", {exact: true}).hover()
    await page.getByTestId("test-id-Travel Assistance Services").click()
    await page.waitForTimeout(3000)
})

test("Scrolling inside the page", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByText("Download Files", {exact: true}).scrollIntoViewIfNeeded()
    await page.getByText("Download Files", {exact: true}).click()
    await expect(page.locator("#generatePdf")).toBeVisible()
})

test("Drag and Drop operations", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const sourceElement= await page.locator("#draggable")
    const targetElement = await page.locator("#droppable")

    // dragTo() - It will perform drag and drop operation
   // await sourceElement.dragTo(targetElement)
    // await expect(targetElement).toHaveText("Dropped!")

    // Alternative way of drag and drop using mouse events
    await sourceElement.hover()
    await page.mouse.down()
    await targetElement.hover()
    await page.mouse.up()
    await expect(targetElement).toHaveText("Dropped!")


})