// Framework - It is a design principle. Set of guidlines.

function loginIntoApplication(){
     // Fill the username
     // Fill the password -  
     // Click on submit button
}

// Duplication - 100 TCs, 300 lines of code - saves 195 line of code
// Maintenance - 100 TCs - all the test cases - 99 steps in terms of maintenance
// Reusability - Once reutilise at multiple times


// 1. Reusability
// 2. Less duplication
// 3. Less maintenance
// 4. Organise the code - Separation of login into different layers.

// POM - Page Object Model

// Page Object Model is a design pattern used in software testing to represent a webpage as an object. It is way to organise and manage the interaction with a web page by creating the properties(variable) and methods(actions) of that particular page.

// This appraoch helps us in reducing the code duplication, improve test maintenance and enhances the readability by encapusulating the poage login within a dedicated class or module.

// POM framework from scratch

// There are different layers that we have to design:

// 1. PAGE LAYER - Will create a package or folder (pages). Create different pages depending on the application. Locators and methods related to that specific page
// LoginPage.ts, DashboardPage.ts, CartPage.ts, PaymentPage.ts

// 2. TEST LAYER - Will create ap package or folder (tests) - Pure test case and assertions.
// LoginPageTest.spec.ts, DashboardPageTest.spec.ts, ......

// 3. DATA LAYER - Will create a package or folder (TestData, data) - Json/Excel - data.json, login.xlsx

// 4. CONFIGURATION LAYER - playwright.config.ts - Global Configuration

// 5. UTILS LAYER - Will create package or folder (utils) - Custom Function, screenshot(), scrollDown(), getting the data from excel

// 6. REPORT LAYER - HTML/Allure - We do not create it separately in playwright













