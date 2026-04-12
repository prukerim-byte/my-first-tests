class AlertPage{
    constructor(page) {
        this.page = page;
        this.alertButton = page.locator("button").nth(0);
        this.confirmButton = page.locator("button").nth(1);
        this.resultText = page.locator("#result");
    }

    async goto() {
        await this.page.goto("/javascript_alerts");
    }

}

export {AlertPage};