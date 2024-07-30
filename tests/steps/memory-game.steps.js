import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '../../src/app/page'

export function openTheGame () {
  render(<Home />)
}

export function memoryTableDimensionsValidation (rows, columns) {
  const cards = screen.getAllByTestId('memory-card', { exact: false })
  return cards.length === rows * columns
}

export function areAllCardsCovered () {
  let result = true
  const cards = screen.getAllByTestId('memory-card', { exact: false })
  cards.forEach(card => {
    if (!card.classList.contains('covered')) {
      result = false
    }
  })
  return result
}

export function areAllCardsUncovered () {
  let result = true
  const cards = screen.getAllByTestId('memory-card', { exact: false })
  cards.forEach(card => {
    if (card.classList.contains('covered')) {
      result = false
    }
  })
  return result
}

export function areAllCardsEnabled () {
  let result = true
  const cards = screen.getAllByTestId('memory-card', { exact: false })
  cards.forEach((card) => {
    if (card.disabled === true) {
      result = false
    }
  })
  return result
}

export function areAllCardsDisabled () {
  let result = true
  const cards = screen.getAllByTestId('memory-card', { exact: false })
  cards.forEach((card) => {
    if (card.disabled !== true) {
      result = false
    }
  })
  return result
}

export function setMockData (data) {
  data = data.trim()

  // userEvent.keyboard('ctrl+m') TO DO try to explain why userEvent doesn't work
  fireEvent.keyDown(screen.getByTestId('cartTable'), {
    key: 'm',
    keyCode: 77,
    which: 77,
    code: 'KeyM',
    location: 0,
    altKey: false,
    ctrlKey: true,
    metaKey: false,
    shiftKey: false,
    repeat: false
  })

  const textInput = screen.getByTestId('mock-data-input')
  const submitButton = screen.getByTestId('mock-data-submit')
  fireEvent.change(textInput, { target: { value: data } })
  fireEvent.click(submitButton)
}

export function uncoverCard (rowPosition, colPosition) {
  fireEvent.click(screen.getByTestId('memory-card card-row' + rowPosition + '-col' + colPosition, { exact: true }))
}

export function isCardUncovered (rowPosition, colPosition) {
  const card = screen.getByTestId('memory-card card-row' + rowPosition + '-col' + colPosition, { exact: true })
  if (card.classList.contains('covered')) {
    return false
  }
  return true
}

export function isCardCovered (rowPosition, colPosition) {
  const card = screen.getByTestId('memory-card card-row' + rowPosition + '-col' + colPosition, { exact: true })
  if (!card.classList.contains('covered')) {
    return false
  }
  return true
}

export function isCardDisabled (rowPosition, colPosition) {
  const card = screen.getByTestId('memory-card card-row' + rowPosition + '-col' + colPosition, { exact: true })
  if (card.classList.contains('disabled')) {
    return false
  }
  return true
}

