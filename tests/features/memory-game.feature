Feature: Memory Game

                        As a player:
                        - I want to play the classic Memory game but individually
                        - So I want to detect all the cards on the table,
                        - and I want to uncover all the even cards on the table

                        How to refer to a card:
                        - Using the (row,column) nomenclature
                        - Rows and columns starts from 1

                        How to load mock data
                        - Using the <ctrl>+m keyboard combination to discover
                        the load mock data form

                        To define the board data will use:
                        "a" couple a
                        "b" couple b

                        There is only one way to define the simulated data
                        - Table:
                        | a | b |
                        | b | a |

        To define the board display will use:
        COVERED CARDS
        "." Covered card
        UNCOVERED CARDS
        "1" couple a
        "2" couple b

        Game example: https://marina-ferreira.github.io/projects/js/memory-game/

        Background:
                Given the player opens the game

        Scenario: Starting game - Memory game default sizing 3x4
                Then the Memory table should have "3" rows and "4" columns

        Scenario: Starting game - All the cards should be covered
                Then all the cards should be covered

        Scenario: Starting game - All the cards should be enabled
                Then all the cards should be enabled

        Scenario: Uncovering a card with the mouse - With the left mouse button
                Given the player loads the following mock data
                        """
                        | a |
                        """
                When the player click on the card ("1","1")
                Then the card ("1","1") should be uncovered

        Scenario: Uncovering a card - Disabling the card
                Given the player loads the following mock data
                        """
                        | a |
                        """
                When the player click on the card ("1","1")
                Then the card ("1","1") should be disabled

        Scenario: Uncovering two cards that are not a couple - cards have to be covered
                Given the player loads the following mock data
                        """
                        | a | b |
                        """
                When the player click on the card ("1","1")    
                And the player click on the card ("1","2")   
                Then the card ("1","1") should be covered    
                And the card ("1","2") should be covered  

        Scenario: Uncovering two cards that are not a couple - have to be covered after a pause of one second
               Given the player loads the following mock data
                        """
                        | a | b |
                        | a | b |
                        """
                When the player click on the card ("1","1")    
                And the player click on the card ("1","2")   
                Then the card ("1","1") should be covered after "1" seconds   
                And the card ("1","2") should be covered after "1" seconds    

        Scenario: Uncovering two cards which are a couple - Uncover the cards
                Given the player loads the following mock data
                        """
                        | a | a |
                        """
                When the player click on the card ("1","1")    
                And the player click on the card ("1","2")
                Then the card ("1","1") should be uncover    
                And the card ("1","2") should be uncover  

        Scenario: Uncovering all couples - all cards must be disabling
                Given the player loads the following mock data
                        """
                        | a | b |
                        | b | a |
                        """
                When the player click on the card ("1","1") 
                And the player click on the card ("2","2")
                And the player click on the card ("1","2")
                And the player click on the card ("2","1")
                Then all the cards should be disabled

        Scenario: Uncovering all couples - all cards must be uncovered
                Given the player loads the following mock data
                        """
                        | a | b |
                        | b | a |
                        """
                When the player click on the card ("1","1") 
                And the player click on the card ("2","2")
                And the player click on the card ("1","2")
                And the player click on the card ("2","1")
                Then all the cards should be uncovered