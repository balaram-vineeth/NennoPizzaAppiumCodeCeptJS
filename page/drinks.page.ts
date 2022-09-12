import header from "./component/header";

const { I } = inject();

class DrinksPage{


    public getHeader() {
        return header;
    }

    drinksPageLocator = {
        addDrink: '//android.view.ViewGroup[./android.widget.TextView[@text="DRINK"]]//android.widget.ImageView[contains(@ resource-id,addBtn)]'
    }

    public addDrink(drink:string) {
        I.waitForElement(this.drinksPageLocator.addDrink.replace('DRINK', drink), 10);
        I.click(this.drinksPageLocator.addDrink.replace('DRINK', drink));
    }
}

export = new DrinksPage();