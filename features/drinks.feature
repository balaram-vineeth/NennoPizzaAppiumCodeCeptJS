Feature: Order a drink

    Feature Description The user should be able to order a drink from the app

    Scenario: The user should be able to open order the drink
        Given The user is on the drinks page
        When The user adds a "Beer" to the cart
        Then The user should be able see the "Beer" in the cart and  delete it 

        