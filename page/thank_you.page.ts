const { I } = inject();

class ThankYouPage {
    locator = {
        message: '//android.widget.TextView[@content-desc="thank_you_text"]',
        backHome: '//android.widget.FrameLayout[@content-desc="back_to_home_btn"]'
    }

    public getThankYouMessage() {
        I.waitForElement(this.locator.message, 5);
        return I.grabTextFrom(this.locator.message);
    }

    public clickBackHomeButton() {
        I.click(this.locator.backHome);
    }
}

export = new ThankYouPage();