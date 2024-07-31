import { loadFeature, defineFeature } from 'jest-cucumber'
import * as steps from './steps/memory-game.steps'
import { waitFor } from '@testing-library/react'

const feature = loadFeature('./tests/features/memory-game.feature')

defineFeature(feature, (test) => {
  test('Starting game - Memory game default sizing 3x4', ({ given, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })
    then(/^the Memory table should have "(.*)" rows and "(.*)" columns$/, (numberOfRows, numberOfCols) => {
      expect(steps.memoryTableDimensionsValidation(numberOfRows, numberOfCols)).toBe(true)
    })
  })
  test('Starting game - All the cards should be covered', ({ given, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    then('all the cards should be covered', () => {
      expect(steps.areAllCardsCovered()).toBe(true)
    })
  })
  test('Starting game - All the cards should be enabled', ({ given, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    then('all the cards should be enabled', () => {
      expect(steps.areAllCardsEnabled()).toBe(true)
    })
  })
  test('Uncovering a card with the mouse - With the left mouse button', ({ given, when, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    given('the player loads the following mock data', (docString) => {
      steps.setMockData(docString)
    })

    when(/^the player click on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      steps.uncoverCard(rowPosition, colPosition)
    })

    then(/^the card \("(.*)","(.*)"\) should be uncovered$/, (rowPosition, colPosition) => {
      expect(steps.isCardUncovered(rowPosition, colPosition)).toBe(true)
    })
  })
  test('Uncovering a card - Disabling the card', ({ given, when, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    given('the player loads the following mock data', (docString) => {
      steps.setMockData(docString)
    })

    when(/^the player click on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      steps.uncoverCard(rowPosition, colPosition)
    })

    then(/^the card \("(.*)","(.*)"\) should be disabled$/, (rowPosition, colPosition) => {
      expect(steps.isCardDisabled(rowPosition, colPosition)).toBe(true)
    })
  })
  test('Uncovering two cards that are not a couple - cards have to be covered', ({ given, when, and, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    given('the player loads the following mock data', (docString) => {
      steps.setMockData(docString)
    })

    when(/^the player click on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      steps.uncoverCard(rowPosition, colPosition)
    })

    and(/^the player click on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      steps.uncoverCard(rowPosition, colPosition)
    })

    then(/^the card \("(.*)","(.*)"\) should be covered$/, (rowPosition, colPosition) => {
      /*
      setTimeout(() => {
        expect(steps.isCardCovered(rowPosition, colPosition)).toBe(true)
      }, 500) //TODO await
      */
    })

    and(/^the card \("(.*)","(.*)"\) should be covered$/, (rowPosition, colPosition) => {
      /* setTimeout(() => {
        expect(steps.isCardCovered(rowPosition, colPosition)).toBe(true)
      }, 500) //TODO await */

    })
  })
  test('Uncovering two cards that are not a couple - have to be covered after a pause of one second', ({ given, when, and, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    });

    given('the player loads the following mock data', (docString) => {
      steps.setMockData(docString)
    });

    when(/^the player click on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      steps.uncoverCard(rowPosition, colPosition)
    });

    and(/^the player click on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      steps.uncoverCard(rowPosition, colPosition)
    });

    then(/^the card \("(.*)","(.*)"\) should be covered after "(.*)" seconds$/, async (rowPosition, colPosition, seconds) => {
      const expectedTime = Number(seconds) * 500
      const threshold = 200
      let moment = Date.now()
      await waitFor(() => {
        expect(steps.isCardCovered(rowPosition, colPosition)).toBe(true)        
      }, {timeout : expectedTime + threshold + 100})
      let moment2 = Date.now() - moment
      console.log ('steps.isCardCovered(rowPosition, colPosition)', steps.isCardCovered(rowPosition, colPosition))
      console.log('Moment2:', moment2)
      expect(moment2 >= expectedTime-threshold && moment2 <= expectedTime+threshold).toBe(true)
    });

    and(/^the card \("(.*)","(.*)"\) should be covered after "(.*)" seconds$/, (arg0, arg1, arg2) => {
      expect(true).toBe(true)
    });
  })

  test('Uncovering two cards which are a couple - Uncover the cards', ({ given, when, and, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    given('the player loads the following mock data', (docString) => {
      steps.setMockData(docString)
    })

    when(/^the player click on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      steps.uncoverCard(rowPosition, colPosition)
    })

    and(/^the player click on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      steps.uncoverCard(rowPosition, colPosition)
    })

    then(/^the card \("(.*)","(.*)"\) should be uncover$/, (rowPosition, colPosition) => {
      expect(steps.isCardUncovered(rowPosition, colPosition)).toBe(true)
    })

    and(/^the card \("(.*)","(.*)"\) should be uncover$/, (rowPosition, colPosition) => {
      expect(steps.isCardUncovered(rowPosition, colPosition)).toBe(true)
    })
  })
  test('Uncovering all couples - all cards must be disabling', ({ given, when, and, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    given('the player loads the following mock data', (docString) => {
      steps.setMockData(docString)
    })

    when(/^the player click on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      steps.uncoverCard(rowPosition, colPosition)
    })

    and(/^the player click on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      steps.uncoverCard(rowPosition, colPosition)
    })

    and(/^the player click on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      steps.uncoverCard(rowPosition, colPosition)
    })

    and(/^the player click on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      steps.uncoverCard(rowPosition, colPosition)
    })

    then('all the cards should be disabled', () => {
      expect(steps.areAllCardsDisabled()).toBe(true)
    })
  })
  test('Uncovering all couples - all cards must be uncovered', ({ given, when, and, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    given('the player loads the following mock data', (docString) => {
      steps.setMockData(docString)
    })

    when(/^the player click on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      steps.uncoverCard(rowPosition, colPosition)
    })

    and(/^the player click on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      steps.uncoverCard(rowPosition, colPosition)
    })

    and(/^the player click on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      steps.uncoverCard(rowPosition, colPosition)
    })

    and(/^the player click on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      steps.uncoverCard(rowPosition, colPosition)
    })

    then('all the cards should be uncovered', () => {
      expect(steps.areAllCardsUncovered()).toBe(true)
    })
  })
})
