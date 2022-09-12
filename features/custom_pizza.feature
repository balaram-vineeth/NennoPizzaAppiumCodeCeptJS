Feature: Create a custom pizza

    Feature Description: The user should be able to buy a pizza with custom ingredients, and see a thank you message on checkout

    Scenario: The user is able to create a custom pizza
        Given The clicks on the custom pizza button
        When The user adds the ingredients and checkout
            |Salami      |
            |Mushrooms   |
            |Ricci       |
        Then The user should see a thank you message and is able to navigate to home page