import { loadFeature, defineFeature } from 'jest-cucumber'
import * as steps from './steps/memory-game.steps'

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

    })

    then('all the cards should be covered', () => {

    })
  })
  test('Starting game - All the cards should be enabled', ({ given, then }) => {
    given('the player opens the game', () => {

    })

    then('all the cards should be enabled', () => {

    })
  })
  test('Uncovering a card with the mouse - With the left mouse button', ({ given, when, then }) => {
    given('the player opens the game', () => {

    })

    given('the player loads the following mock data', (docString) => {

    })

    when(/^the player click on the card \("(.*)","(.*)"\)$/, (arg0, arg1) => {

    })

    then(/^the card \("(.*)","(.*)"\) should be uncovered$/, (arg0, arg1) => {

    })
  })
  test('Uncovering a card - Disabling the card', ({ given, when, then }) => {
    given('the player opens the game', () => {

    })

    given('the player loads the following mock data', (docString) => {

    })

    when(/^the player click on the card \("(.*)","(.*)"\)$/, (arg0, arg1) => {

    })

    then(/^the card \("(.*)","(.*)"\) should be disabled$/, (arg0, arg1) => {

    })
  })
  test('Uncovering two cards that are not a couple - cards have to be covered', ({ given, when, and, then }) => {
    given('the player opens the game', () => {

    })

    given('the player loads the following mock data', (docString) => {

    })

    when(/^the player click on the card \("(.*)","(.*)"\)$/, (arg0, arg1) => {

    })

    and(/^the player click on the card \("(.*)","(.*)"\)$/, (arg0, arg1) => {

    })

    then(/^the card \("(.*)","(.*)"\) should be covered$/, (arg0, arg1) => {

    })

    and(/^the card \("(.*)","(.*)"\) should be covered$/, (arg0, arg1) => {

    })
  })
  test('Uncovering two cards which are a couple - Uncover the cards', ({ given, when, and, then }) => {
    given('the player opens the game', () => {

    })

    given('the player loads the following mock data', (docString) => {

    })

    when(/^the player click on the card \("(.*)","(.*)"\)$/, (arg0, arg1) => {

    })

    and(/^the player click on the card \("(.*)","(.*)"\)$/, (arg0, arg1) => {

    })

    then(/^the card \("(.*)","(.*)"\) should be uncover$/, (arg0, arg1) => {

    })

    and(/^the card \("(.*)","(.*)"\) should be uncover$/, (arg0, arg1) => {

    })
  })
  test('Uncovering all couples - all cards must be disabling', ({ given, when, and, then }) => {
    given('the player opens the game', () => {

    })

    given('the player loads the following mock data', (docString) => {

    })

    when(/^the player click on the card \("(.*)","(.*)"\)$/, (arg0, arg1) => {

    })

    and(/^the player click on the card \("(.*)","(.*)"\)$/, (arg0, arg1) => {

    })

    and(/^the player click on the card \("(.*)","(.*)"\)$/, (arg0, arg1) => {

    })

    and(/^the player click on the card \("(.*)","(.*)"\)$/, (arg0, arg1) => {

    })

    then('all the cards should be disabled', () => {

    })
  })
  test('Uncovering all couples - all cards must be uncovered', ({ given, when, and, then }) => {
    given('the player opens the game', () => {

    })

    given('the player loads the following mock data', (docString) => {

    })

    when(/^the player click on the card \("(.*)","(.*)"\)$/, (arg0, arg1) => {

    })

    and(/^the player click on the card \("(.*)","(.*)"\)$/, (arg0, arg1) => {

    })

    and(/^the player click on the card \("(.*)","(.*)"\)$/, (arg0, arg1) => {

    })

    and(/^the player click on the card \("(.*)","(.*)"\)$/, (arg0, arg1) => {

    })

    then('all the cards should be uncovered', () => {

    })
  })
})
