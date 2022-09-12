Feature: Add a Ricci Pizza

    Feature Description: The user should be able to buy a Ricci Pizza, see its ingredients and price on the home page, navigate to the details page and add it to cart, abd delete it from the cart if needed


        Scenario: The user should be able to see the title when opening the app
        Given The user is on the App
        When  The user is on the page with the title "Nenno's Pizza"
        Then The user should be able to see "Ricci" Pizza - its ingredients and price;
    
        Scenario: On the Pizza Page the user should be able to see the pizza ingredients 
        Given The user is on the "Ricci" Pizza page
        When The "Ingredients" section is shown
        Then The user should be able to see ingredients
            |Ricci      |
            |Mozzarella |

        Scenario: The user should be able to add the pizza to the cart
        Given The user is on the "Ricci" Pizza page
        When The user clicks on the Add to Cart button and navigates to the homepage
        Then The user should be able to see "1" alongside the cart icon

        Scenario: The user should be able to remove the pizza from the cart
        Background: The user has added an item to cart and has navigates to the carts page 
            Given The user is on the "Ricci" Pizza page
            When The user clicks on the Add to Cart button and navigates to the homepage
        Given The user is on the Carts page
        When Delete "Ricci" from Cart
        Then The item "Ricci" is not present in the carts page
