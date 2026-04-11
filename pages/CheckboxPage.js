class CheckboxPage{
    constructor(page) {
        this.page = page;
        this.firstCheckbox = page.locator('input[type="checkbox"]').nth(0);
        this.secondCheckbox = page.locator('input[type="checkbox"]').nth(1);
    }

    async goto() {
        await this.page.goto("/checkboxes");
    }
}

export { CheckboxPage };