// Drop Down
// 2 Types of Drop Down

// 1. Static drop down - The value will never get changed
    // a. Single Select drop down
    // b. Multi Select drop down
// 2. Dynamic drop down - The value of the DD can be changed.
    // a. Single Select drop down
    // b. Multi Select drop down


// Development of Drop Down
// 1. <select> tag - It is used to create static drop down
// 2. non select <div>, li, ul, option, tag - It is used to create dynamic drop down


// 1. DD developed using <select> tag
// Steps to handle the drop down

// 1. Launch the url
// 2. Locate the drop down element by writing the locator
// 3. Get the value from the drop down by using selectOption() method
// Ex: - page.locator("#dd").selectOption("value" or {label : "label"} or {index : index})
// 4. If the DD is mult select  - pass the array of values inside the selectOption() method
// Ex: - page.locator("#dd").selectOption(["value1", "value2"] or [{label : "label1"}, {label : "label2"}] or [{index : index1}, {index : index2}])


// 2. DD developed using non select tag
// Steps to handle the drop down

// 1. Launch the url
// 2. Locate the drop down element by writing the locator
// 3. Click on the drop down to expand the options
// 4. Identify and click on the element that you want to select from the drop down

import { test, expect } from "@playwright/test";

test("Drop down developed using select tag", async ({page})=>{
    await page.goto("https://practice.expandtesting.com/dropdown")
    await page.locator("#country").selectOption("NZ")
    await page.locator("#country").selectOption({label:"Barbados"})
    await page.locator("#country").selectOption({index:16})

    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#cars").selectOption(["volvo", "Audi"])
    await page.locator("#cars").selectOption([{label:"Saab"}, {label:"Opel"}])
})

test("Drop down developed using non select tag", async ({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#withOptGroup").click()
    await page.locator("#react-select-2-option-2").click()
    await page.waitForTimeout(2000)
    await page.locator("div.css-1hwfws3").last().click()
    await page.locator("#react-select-4-option-1").click()
    await page.locator("#react-select-4-option-3").click()
    await page.waitForTimeout(2000)
})