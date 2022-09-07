import assert from 'assert';

Feature('B');

Scenario('Add Ricci', async ({ I }) => {

    await I.seeAppIsInstalled("com.docler.nennospizza");
    await I.waitForElement('//android.widget.TextView[@content-desc="page_title"]');
    await I.seeElement('//android.widget.TextView[@content-desc="page_title"]');
    await I.waitForElement('//android.view.View[@content-desc="ricci_pizza_details_btn"]', 10);
    // await I.seeNumberOfVisibl_title"');
    await I.click("//android.view.View[@content-desc=\"ricci_pizza_details_btn\"]");
    await I.waitForElement('//android.widget.TextView[@content-desc="page_title"]', 10);
    await I.seeTextEquals('Ricci', '//android.widget.TextView[@content-desc="page_title"]' );
    await I.seeTextEquals("Ingredients", '//android.widget.TextView[contains(@resource-id, "title")]');
    let atr = await I.grabAttributeFrom({'xpath':'//android.view.ViewGroup[contains(@resource-id, "listItemView") and ./android.widget.TextView[@text = "Mozzarella"]]/android.widget.CheckBox'}, 'checked');
    assert.equal(atr, 'true', 'The Checkbox is selected');
    let atr2 = await I.grabAttributeFrom('//android.view.ViewGroup[contains(@resource-id, "listItemView") and ./android.widget.TextView[@text = "Ricci"]]/android.widget.CheckBox', 'checked');
    assert.equal(atr2, 'true', 'The Checkbox is selected');

    await I.click('//android.widget.FrameLayout[@content-desc="add_to_cart_btn"]');
    
    let cost = await I.grabTextFrom('//android.widget.FrameLayout[@content-desc="add_to_cart_btn"]//android.widget.TextView[contains(@resource-id, \'suffix\')]');
    // cost.replace('(', '').replace(')', '');

    await I.click('//android.widget.ImageButton[@content-desc="back_btn"]');
    await I.waitForElement('//android.view.ViewGroup[@content-desc="cart_icon"]', 10);
    await I.click('//android.view.ViewGroup[@content-desc="cart_icon"]')

    await I.waitForElement('//androidx.recyclerview.widget.RecyclerView[contains(@resource-id, \'listView\')]//android.widget.TextView[contains(@resource-id, \'title\')]', 10);
    await I.seeTextEquals('Ricci', '//androidx.recyclerview.widget.RecyclerView[contains(@resource-id, \'listView\')]//android.widget.TextView[contains(@resource-id, \'title\')]');
    await I.seeTextEquals(cost.replace('(','').replace(')',''), '//androidx.recyclerview.widget.RecyclerView[contains(@resource-id, \'listView\')]//android.widget.TextView[contains(@resource-id, \'price\')]');

    await I.click('//androidx.recyclerview.widget.RecyclerView[contains(@resource-id, \'listView\')]//android.widget.ImageView[contains(@resource-id, \'deleteBtn\')]');

    await I.seeNumberOfElements('//androidx.recyclerview.widget.RecyclerView[contains(@resource-id, \'listView\')]/android.view.ViewGroup', 0)

    await I.click('//android.widget.ImageButton[@content-desc="back_btn"]');

});
