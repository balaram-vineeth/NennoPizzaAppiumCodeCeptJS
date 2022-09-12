import header from "./component/header";

const { I } = inject();

class CartPage {

    public get getHeader() {
        return header;
    }

    cartPageLocator = {
        drinksButton: '//android.widget.TextView[@content-desc="Drinks"]',
        deleteItemButton: '//android.view.ViewGroup[./android.widget.TextView[@text="ITEM"]]//android.widget.ImageView[contains(@resource-id, \'deleteBtn\')]',
        item:'//android.view.ViewGroup[./android.widget.TextView[@text="ITEM"]]',
        checkOut:'//android.widget.FrameLayout[@content-desc="checkout_btn"]'
    }

    public deleteItems(item:string) {
        I.waitForElement(this.cartPageLocator.deleteItemButton.replace('ITEM', item), 10);
        I.click(this.cartPageLocator.deleteItemButton.replace('ITEM', item));
    }

    public clickDrinksButton() {
        I.waitForElement(this.cartPageLocator.drinksButton, 10);
        I.click(this.cartPageLocator.drinksButton);
    }

    public isItemPresent(item:string) {
        I.waitForElement(this.cartPageLocator.deleteItemButton.replace('ITEM', item), 10);
        return I.seeElement(this.cartPageLocator.item.replace('ITEM', item));
    }

    public isNotItemPresent(item:string) {
        return I.dontSee(this.cartPageLocator.item.replace('ITEM', item));
    }

    public clickCheckOutButton() {
        I.waitForElement(this.cartPageLocator.checkOut, 10);
        I.click(this.cartPageLocator.checkOut);
    }
}

export = new CartPage();