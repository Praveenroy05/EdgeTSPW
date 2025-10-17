import {test, expect} from '@playwright/test';
import path from 'path';

test("File upload handling", async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

   
    const file1 = path.join(__dirname , "../TestData/login.xlsx")
    const file2 = path.join(__dirname , "../TestData/chrome.exe")

    // const file1 = "C:/Users/pkroy/Music/EdgeTSPW/TestData/login.xlsx"
    // const file2 = "C:/Users/pkroy/Music/EdgeTSPW/TestData/chrome.exe"
    // setInputFiles([pathofthefile]) - to upload files
    await page.locator("#filesToUpload").
    setInputFiles(file1)
    await expect(page.locator("#fileList li")).toContainText("login.xlsx")

    await page.locator("#filesToUpload").
    setInputFiles([file1, file2])
    
    await expect(page.locator("#fileList li").first()).toContainText("login.xlsx")
    await expect(page.locator("#fileList li").last()).toContainText("chrome.exe")
})


