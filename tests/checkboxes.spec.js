import { test, expect} from '@playwright/test';
import { CheckboxPage } from '../pages/CheckboxPage';

test.describe("Check Checkboxes", () => {
    let checkboxPage;

    test.beforeEach(async({page}) => {
        checkboxPage = new CheckboxPage(page);
        await checkboxPage.goto();

    });
    
    test("First checkbox should be unchecked by default", async({page}) => {

        await expect(checkboxPage.firstCheckbox).not.toBeChecked();
    });


    test("Check the first checkbox and verify it becomes checked", async ({page}) => {
        
        await checkboxPage.firstCheckbox.check();

        await expect(checkboxPage.firstCheckbox).toBeChecked();
        
    });

    test("Uncheck the second checkbox and verify it becomes unchecked", async ({page}) => {
        
        await checkboxPage.secondCheckbox.uncheck();

        await expect(checkboxPage.secondCheckbox).not.toBeChecked();
        
    });

})