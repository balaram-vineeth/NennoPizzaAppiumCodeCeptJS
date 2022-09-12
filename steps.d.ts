/// <reference types='codeceptjs' />

type nHomePage = typeof import('./page/home.page');
type nHeader = typeof import('./page/component/header');
type nCartPage = typeof import('./page/cart.page');
type nDrinksPage = typeof import('./page/drinks.page');
type nPizzaDetailspPage = typeof import('./page/pizza_details.page');


declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, nHomePage:nHomePage, nCartPage:nCartPage, nDrinksPage:nDrinksPage, nPizzaDetailspPage:nPizzaDetailspPage }
  interface Methods extends Appium {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
