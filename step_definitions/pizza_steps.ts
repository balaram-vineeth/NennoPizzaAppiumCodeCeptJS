import assert = require("assert")

import cartpage = require("../page/cartpage");
import homepage = require("../page/home.page");
import pizzadetailspage = require("../page/pizza_details.page");
import thank_youPage = require("../page/thank_you.page");

export {};

const { I } = inject();

Given(/The user is on the \"([^\"]*)\" Pizza page/, async(title) => {
    homepage.clickOnPizza(title);
    assert.equal(await pizzadetailspage.getHeader().getPageTitle(), title);
});

When(/The \"([^\"]*)\" section is shown/, async(sectionName:string)=> {
    assert.equal(await pizzadetailspage.getIngredientsTitle(), sectionName);
})

When(/The user clicks on the Add to Cart button and navigates to the homepage/, ()=> {
    pizzadetailspage.addToCart();
    pizzadetailspage.getHeader().clickBackButton();
})

Then(/The user should be able to see ingredients/, (ingredients)=> {
    for (const key in ingredients.rows) {
        pizzadetailspage.isIngredientAdded(ingredients.rows[key].cells[0].value);
    }
})  

Given(/The user is on the Carts page/, ()=> {
    homepage.getHeader().clickCartButton();
})

When(/The user adds the ingredients and checkout/, (ingredients)=> {
    for (const key in ingredients.rows) {
        pizzadetailspage.addIngredients(ingredients.rows[key].cells[0].value);
    }
    pizzadetailspage.addToCart();
    homepage.getHeader().clickBackButton();
    homepage.getHeader().clickCartButton();
    cartpage.clickCheckOutButton();
})

Then(/The user should see a thank you message and is able to navigate to home page/, async()=> {
    assert.equal(await thank_youPage.getThankYouMessage(), 'Thank you for your order');
    thank_youPage.clickBackHomeButton();
    assert.equal(await homepage.getHeader().getPageTitle(), "Nenno's Pizza");
})

