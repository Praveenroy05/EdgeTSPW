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