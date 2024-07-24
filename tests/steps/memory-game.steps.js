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

export function areAllCartsCovered () {
  let result = true
  const cards = screen.getAllByTestId('memory-card', { exact: false })
  cards.forEach(card => {
    if (!card.classList.contains('covered')) {
      result = false
    }
  })
  return result
}
