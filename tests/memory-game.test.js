import { loadFeature, defineFeature } from 'jest-cucumber'
import * as steps from './steps/memory-game.steps'

const feature = loadFeature('./tests/features/memory-game.feature')

defineFeature(feature, (test) => {
    test('Starting game - Minefield default sizing 9x9', ({ given, then }) => {
      given('the player opens the game', () => {
        steps.openTheGame()
      })
      then(/^the Memory table should have "(.*)" rows and "(.*)" columns$/, (numberOfRows, numberOfCols) => {
        pending()
      })
    })
})