import { test, expect} from '@playwright/test'; 
import { LoginPage } from '../pages/LoginPage';

test.describe("Login", () => {

    test("valid credentials redirect away from login page", async({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login("tomsmith", "SuperSecretPassword!");
        // assertion
        await expect(page).toHaveURL("https://the-internet.herokuapp.com/secure");
    });

    test("wrong password > shows error message", async({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login("tomsmith", "Wrongpass");
        // assertion
        await expect(await loginPage.getFlashMessage()).toHaveText(/Your password is invalid!/);
    });

    test("empty username field > shows error message", async({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login("", "asdasd");
        // assertion
        await expect(await loginPage.getFlashMessage()).toHaveText(/Your username is invalid!/);
    });

    test("empty password field after typing username > shows error message", async({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login("tomsmith", "");
        // assertion            
        await expect(await loginPage.getFlashMessage()).toHaveText(/Your password is invalid!/);
        });


});

