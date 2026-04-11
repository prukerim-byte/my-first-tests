import {test, expect} from '@playwright/test';
import { DynamicPage } from '../pages/DynamicPage';

test.describe("Dyanmic Pages", () => {

    test("Assert that 'Hello World!' is visible", async({page}) => {
        const dynamicPage = new DynamicPage(page);
        await dynamicPage.goto();
        await dynamicPage.startButton.click();
        await dynamicPage.finishButton.waitFor();

        await expect(dynamicPage.finishButton).toHaveText("Hello World!");

    });
});