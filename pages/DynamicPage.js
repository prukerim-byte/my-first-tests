class DynamicPage{
    constructor(page) {
        this.page = page;
        this.startButton = page.locator("#start button");
        this.finishButton = page.locator("#finish");
    }

    async goto() {
        await this.page.goto("/dynamic_loading/1");
    }
}

export {DynamicPage};