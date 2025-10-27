import {test, expect} from '@playwright/test'

test("Calendar handling", async ({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.locator(".ui-datepicker-trigger").click()

    const day = "10"
    const month = "May"
    const year = "2027"

    const monthPicker = page.locator(".ui-datepicker-month")
    const yearPicker = page.locator(".ui-datepicker-year")


    // while(!((await monthPicker.textContent() == month) &&  (await yearPicker.textContent()== year))){
    //     await page.getByText("Next").click()
    // }

    while((await monthPicker.innerText() !=month) ||  (await yearPicker.textContent()!= year)){
        await page.getByText("Next").click()
    }

    await page.getByText(day, {exact: true}).click()
    await expect(page.locator("#sixth_date_picker")).toHaveValue("05/10/2027")
})