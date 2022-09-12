import assert = require("assert")
import cartpage = require("../page/cart.page");
import homepage = require("../page/home.page");
import pizzadetailspage = require("../page/pizza_details.page");

const { I } = inject();

Given(/The user is on the App/, () => {
    I.seeAppIsInstalled("com.docler.nennospizza");
});


When(/The user is on the page with the title \"([^\"]*)\"/, async(title) => {
    assert.equal(await homepage.getHeader().getPageTitle(), title);
});

Then(/The user should be able to see \"([^\"]*)\" Pizza - its ingredients and price/, (pizza)=> {
    homepage.isPizzaIngredientsShown(pizza);
    homepage.isPizzaPriceShown(pizza);
    homepage.isPizzaShown(pizza);
    homepage.clickOnPizza(pizza);

})

Given(/The user is on the \"([^\"]*)\" Pizza page/, async(title) => {
    homepage.clickOnPizza(title);
    assert.equal(await pizzadetailspage.getHeader().getPageTitle(), title);
    pizzadetailspage.isImageShown();
});

When(/The \"([^\"]*)\" section is shown/, async(sectionName:string)=> {
    assert.equal(await pizzadetailspage.getIngredientsTitle(), sectionName);
});

Then(/The user should be able to see ingredients/, (ingredients)=> {
    for (const key in ingredients.rows) {
        pizzadetailspage.isIngredientAdded(ingredients.rows[key].cells[0].value);
    }
});

When(/The user clicks on the Add to Cart button and navigates to the homepage/, ()=> {
    pizzadetailspage.addToCart();
    pizzadetailspage.getHeader().clickBackButton();
});

Then (/The user should be able to see \"([^\"]*)\" alongside the cart icon/, async(count)=> {
    assert.equal(await homepage.getHeader().getCartCounter(), count);
});

Given(/The user is on the Carts page/, ()=> {
    homepage.getHeader().clickCartButton();
});

When(/Delete \"([^\"]*)\" from Cart/, (item)=> {
    cartpage.deleteItems(item)
});

Then(/The item \"([^\"]*)\" is not present in the carts page/, (item)=> {
    cartpage.isNotItemPresent(item);
});