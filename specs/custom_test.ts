import assert from 'assert';

Feature('B');

Scenario('Add Custom Pizza', async ({ I }) => {

    await I.seeAppIsInstalled("com.docler.nennospizza");
    await I.waitForElement('//android.widget.ImageView[@content-desc="add_custom_pizza_btn"]', 10);
    await I.click('//android.widget.ImageView[@content-desc="add_custom_pizza_btn"]');


    await I.waitForElement('//android.view.ViewGroup[contains(@resource-id, "listItemView") and ./android.widget.TextView[@text = "Salami"]]/android.widget.CheckBox')
    await I.click('//android.view.ViewGroup[contains(@resource-id, "listItemView") and ./android.widget.TextView[@text = "Salami"]]/android.widget.CheckBox')

    await I.click('//android.view.ViewGroup[contains(@resource-id, "listItemView") and ./android.widget.TextView[@text = "Mushrooms"]]/android.widget.CheckBox')

    await I.click('//android.view.ViewGroup[contains(@resource-id, "listItemView") and ./android.widget.TextView[@text = "Ricci"]]/android.widget.CheckBox')

    let cost = await I.grabTextFrom('//android.widget.FrameLayout[@content-desc="add_to_cart_btn"]//android.widget.TextView[contains(@resource-id, \'suffix\')]');

    await I.click('//android.widget.FrameLayout[@content-desc="add_to_cart_btn"]');

    await I.click('//android.widget.ImageButton[@content-desc="back_btn"]');

    await I.waitForElement('//android.view.ViewGroup[@content-desc="cart_icon"]', 10)
    await I.click('//android.view.ViewGroup[@content-desc="cart_icon"]')


    await I.waitForElement('//android.widget.FrameLayout[@content-desc="checkout_btn"]', 10);
    await I.click('//android.widget.FrameLayout[@content-desc="checkout_btn"]');

    await I.waitForElement('//android.widget.TextView[@content-desc="thank_you_text"]', 10)
    await I.grabTextFrom('//android.widget.TextView[@content-desc="thank_you_text"]')


    await I.click('//android.widget.FrameLayout[@content-desc="back_to_home_btn"]');


});
