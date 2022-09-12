import header from "./component/header";

const { I } = inject();


class PizzaDetailsPage{

    pizzaDetailsPageLocators = {
        ingredientsTitle:'//android.widget.TextView[contains(@resource-id, "title")]',
        ingredientsCheckbox:'//android.view.ViewGroup[contains(@resource-id, "listItemView") and ./android.widget.TextView[@text = "ING"]]/android.widget.CheckBox',
        addToCart:'//android.widget.FrameLayout[@content-desc="add_to_cart_btn"]',
        cartCost:'//android.widget.FrameLayout[@content-desc="add_to_cart_btn"]//android.widget.TextView[contains(@resource-id, \'suffix\')]',
        pizzaImage:'//android.widget.ImageView[@content-desc="pizza_image"]'
    }


    public getHeader() {
        return header;
    }

    public getIngredientsTitle() {
        I.waitForElement(this.pizzaDetailsPageLocators.ingredientsTitle, 10);
        return I.grabTextFrom(this.pizzaDetailsPageLocators.ingredientsTitle);
    }

    public addIngredients(ing:string) {
        I.waitForElement(this.pizzaDetailsPageLocators.ingredientsCheckbox.replace('ING', ing), 10);
        I.scrollIntoView(this.pizzaDetailsPageLocators.ingredientsCheckbox.replace('ING', ing),{ behavior: "smooth", block: "center", inline: "center" });
        I.click(this.pizzaDetailsPageLocators.ingredientsCheckbox.replace('ING', ing))
    }

    public isIngredientAdded(ing:string) {
        return I.grabAttributeFrom(this.pizzaDetailsPageLocators.ingredientsCheckbox.replace('ING', ing), 'checked')
    }

    public addToCart() {
        I.click(this.pizzaDetailsPageLocators.addToCart)
    }

    public getCartValue() {
        return I .grabTextFrom(this.pizzaDetailsPageLocators.cartCost);
    }

    public isImageShown() {
        I.seeElement(this.pizzaDetailsPageLocators.pizzaImage);
    }
}

export = new PizzaDetailsPage();
