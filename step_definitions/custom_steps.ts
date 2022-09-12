import assert = require("assert")

import cartpage from "../page/cart.page";
import homepage from "../page/home.page";
import pizzadetailspage from "../page/pizza_details.page";
import thank_youPage = require("../page/thank_you.page");

Given(/The clicks on the custom pizza button/, ()=> {
    homepage.clickPlusButton();
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
