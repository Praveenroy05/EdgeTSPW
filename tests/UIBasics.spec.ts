/*

Test case 1: Positive LogIn test
Launc the url  - 
Type username student into Username field
Type password Password123 into Password field
Push Submit button
Verify new page URL contains practicetestautomation.com/logged-in-successfully/
Verify new page contains expected text ('Congratulations' or 'successfully logged in')
Verify button Log out is displayed on the new page


*/

import {test, expect} from '@playwright/test'

test("Fill and click on an element validation", async ({page})=>{
    // goto(url) - https://google.com
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // fill("string")
    await page.locator("#username").fill("student")
    // toHaveValue(string) - It will validate the input field should have value as string
    await expect(page.locator("#username")).toHaveValue("student")
    await page.locator('#password').fill("Password123")
    await expect(page.locator("#password")).toHaveValue("Password123")
    // click() - Click an element 
    await page.getByRole("button", {name: 'Submit'}).click()
    await expect(page.locator("h1.post-title")).toHaveText("Logged In Successfully")
    await expect(page.locator("h1.post-title")).toContainText("Successfully")
})

// text from an element
// test from multiple elements
// Radio button and checkbox

test("Text from an element", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // textContent() - 
    // innerText() - It will return the visible text on the page
    const textElement = await page.locator("h1.title").innerText()
    await expect(textElement).toContain("Automation Testing Practice")
    console.log(textElement);


})

test("Text from multiple elements", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // h2.title
    // first() - It will select the first element from the list of elements
    // last() - It will select the last element from the list of elements
    // nth(index) - It will select the element based on the index provided. 
    // nth(1) - It will select the 2nd element as index starts from 0

    const firstText = await page.locator("h2.title").first().textContent()
    console.log(firstText);
    const lastText = await page.locator("h2.title").last().textContent()
    console.log(lastText);
    const indexedText = await page.locator("h2.title").nth(1).textContent()
    console.log(indexedText);
    // allTextContents() - It will return the list of text from the list of elements
    // allInnerTexts() - It will return the list of visible text from the list of elements
    const allText = await page.locator("h2.title").allTextContents()
    console.log(allText);

})

// Radio button and checkbox
test("Radio button and checkbox", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // check() - It will check the checkbox or radio button
    // uncheck() - It will uncheck the checkbox
    // click() - It will click on the element
    const radioButton = page.getByLabel("Male", {exact: true})
    await radioButton.check()
    // toBeChecked() - It will validate the checkbox or radio button is checked
    await expect(radioButton).toBeChecked()
    
})
