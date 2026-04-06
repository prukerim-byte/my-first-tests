const { test, expect } = require('@playwright/test');

test.describe("Wikipedia search", () => {

    test("Wikipedia homepage has correct title", async({ page }) => {
        await page.goto('https://www.wikipedia.org');
        await expect(page).toHaveTitle(/Wikipedia/);
    });

    test("Wikipedia search works", async({ page }) => {
        await page.goto('https://www.wikipedia.org');
        await page.locator("#searchInput").fill("Playwright");
        await page.keyboard.press("Enter");
        await expect(page).toHaveURL(/search|Playwright/);
    });

    test("Wikipedia search using semantic locator", async({ page }) => {
        await page.goto('https://www.wikipedia.org');
        await page.getByLabel("Search Wikipedia").fill("Automation testing");
        await page.getByRole("button", {name: "Search"}).click();
        await expect(page).not.toHaveURL("https://www.wikipedia.org");
    });
});
