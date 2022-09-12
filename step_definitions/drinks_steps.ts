import cartpage from "../page/cart.page";
import drinkspage from "../page/drinks.page";
import homepage from "../page/home.page"

const { I } = inject();

Given(/The user is on the drinks page/, ()=> {
    I.seeAppIsInstalled("com.docler.nennospizza");
    homepage.getHeader().clickCartButton();
    cartpage.clickDrinksButton();
});

When(/The user adds a \"([^\"]*)\" to the cart/, (drink)=> {
    drinkspage.addDrink(drink);
    drinkspage.getHeader().clickBackButton();
});

Then(/The user should be able see the \"([^\"]*)\" in the cart and  delete it/, (item)=> {
    cartpage.isItemPresent(item);
    cartpage.deleteItems(item)
    cartpage.isNotItemPresent(item);
})

