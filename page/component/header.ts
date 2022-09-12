const { I } = inject();

/**
 * This is a common header component used by all relevant pages
 */
class Header {
    headerLocators = {
       pageTitle:'//android.widget.TextView[@content-desc="page_title"]',
       backButton:'//android.widget.ImageButton[@content-desc="back_btn"]',
       cartButton:'//android.view.ViewGroup[@content-desc="cart_icon"]',
       cartItemCount:'//android.widget.TextView[@content-desc="cart_content_number"]'
    }

    public getPageTitle() {
        I.waitForElement('//android.widget.TextView[@content-desc="page_title"]', 10);
        return I.grabTextFrom('//android.widget.TextView[@content-desc="page_title"]');
    }

    public clickBackButton() {
        I.waitForElement(this.headerLocators.backButton, 10);
        I.click(this.headerLocators.backButton);
    }

    public clickCartButton() {
        I.waitForElement(this.headerLocators.cartButton, 10);
        I.click(this.headerLocators.cartButton);
    }

    public getCartCounter() {
        I.waitForElement(this.headerLocators.cartItemCount, 10);
        return I.grabTextFrom(this.headerLocators.cartItemCount);
    }
}

export = new Header();