import {test, expect} from '@playwright/test';
import { AlertPage } from '../pages/AlertPage';

test.describe("Alert Page", () => {

    let alertPage;

    test.beforeEach(async({page}) => {
        alertPage = new AlertPage(page);
        await alertPage.goto();
    })

    test("Accept simple alert, verify result message 'You successfully clicked an alert'", async({page}) => {

        page.on("dialog", async(dialog) => {
            console.log(dialog.message()); // log the message from the dialog
            await dialog.dismiss(); // click Cancel
        });
        await alertPage.alertButton.click();

        await expect(alertPage.resultText).toHaveText("You successfully clicked an alert");
    });

    test("Accept the confirm dialog and verify result says 'You clicked: Ok'", async({page}) => {

        page.on("dialog", async(dialog) => {
            console.log(dialog.message()); 
            await dialog.accept(); // click OK
        });

        await alertPage.confirmButton.click();

        await expect(alertPage.resultText).toHaveText("You clicked: Ok");
    });

    test("Dismiss the confirm dialog and verify result says 'You clicked: Cancel'", async({page}) => {

        page.on("dialog", async(dialog) => {
            console.log(dialog.message()); 
            await dialog.dismiss(); // click Cancel
        });

        await alertPage.confirmButton.click();

        await expect(alertPage.resultText).toHaveText("You clicked: Cancel");

    });
    
});