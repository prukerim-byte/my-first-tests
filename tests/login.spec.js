const { test, expect} = require('@playwright/test');

test.describe("Login", () => {

    test.beforeEach(async({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/login");
    });

    test("valid credentials redirect away from login page", async({ page }) => {
        await page.locator("#username").fill("tomsmith");
        await page.locator("#password").fill("SuperSecretPassword!");
        await page.getByRole("button", {name: "Login"}).click();

        await expect(page).toHaveURL("https://the-internet.herokuapp.com/secure");
    });

    test("wrong password > shows error message", async({ page }) => {
        await page.locator("#username").fill("tomsmith");
        await page.locator("#password").fill("WrongPasss");
        await page.getByRole("button", {name: "Login"}).click();
        
        await expect(page.locator("#flash")).toHaveText(/Your password is invalid!/);
    });

    test("empty username field > shows error message", async({ page }) => {
        await page.locator("#username").fill("");
        await page.locator("#password").fill("");
        await page.getByRole("button", {name: "Login"}).click();
        
        await expect(page.locator("#flash")).toHaveText(/Your username is invalid!/);
    });

    test("empty password field after typing username > shows error message", async({ page }) => {
            await page.locator("#username").fill("tomsmith");
            await page.locator("#password").fill("");
            await page.getByRole("button", {name: "Login"}).click();
            
            await expect(page.locator("#flash")).toHaveText(/Your password is invalid!/);
        });


});

