import header from "./component/header";

const { I} = inject();


class HomePage {

    public getHeader() {
        return header;
    }

    locator = {
        item:'//android.view.ViewGroup[./android.widget.TextView[@text="PIZZA"]]',
        itemIngredients:'//android.view.ViewGroup[./android.widget.TextView[@text="PIZZA"]]//android.widget.TextView[contains(@content-desc, "pizza_contents")]',
        itemPrice:'//android.view.ViewGroup[./android.widget.TextView[@text="PIZZA"]]//android.widget.TextView[contains(@content-desc, "pizza_price")]',
        addButton:'//android.widget.ImageView[@content-desc="add_custom_pizza_btn"]'
    }

    public isPizzaIngredientsShown(name:string) {
        I.seeElement(this.locator.itemIngredients.replace('PIZZA', name))
    }

    public isPizzaPriceShown(name:string) {
        I.seeElement(this.locator.itemPrice.replace('PIZZA', name))
    }

    public isPizzaShown(name:string) {
        I.seeElement(this.locator.item.replace('PIZZA', name))
    }

    public clickOnPizza(name:string) {
        I.waitForElement(this.locator.item.replace('PIZZA', name), 10);
        I.click(this.locator.item.replace('PIZZA', name));
    }


    public clickPlusButton() {
        I.waitForElement(this.locator.addButton);
        I.click(this.locator.addButton);
    }
}

export = new HomePage();