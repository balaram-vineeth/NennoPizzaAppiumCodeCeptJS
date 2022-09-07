import assert from 'assert';

Feature('B');

Scenario('Add Drinks', async ({ I }) => {

    await I.seeAppIsInstalled("com.docler.nennospizza");
    await I.waitForElement('//android.view.ViewGroup[@content-desc="cart_icon"]', 10);
    await I.click('//android.view.ViewGroup[@content-desc="cart_icon"]')
    await I.waitForElement('//android.widget.TextView[@content-desc="Drinks"]', 10)
    await I.click('//android.widget.TextView[@content-desc="Drinks"]')

    await I.waitForElement('//android.widget.ImageView[@content-desc="add_beer_btn"]')
    await I.click('//android.widget.ImageView[@content-desc="add_beer_btn"]')

    await I.click('//android.widget.ImageButton[@content-desc="back_btn"]');

    await I.waitForElement('//androidx.recyclerview.widget.RecyclerView[contains(@resource-id, \'listView\')]//android.widget.ImageView[contains(@resource-id, \'deleteBtn\')]', 10);

    await I.click('//androidx.recyclerview.widget.RecyclerView[contains(@resource-id, \'listView\')]//android.widget.ImageView[contains(@resource-id, \'deleteBtn\')]');

    await I.click('//android.widget.ImageButton[@content-desc="back_btn"]');

});
