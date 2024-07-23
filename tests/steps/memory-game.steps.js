import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Game from '../../src/components/game'

export function openTheGame () {
  render(<Game />)
}

export function memoryTableDimensionsValidation (rows, columns) {
  const cards = screen.getAllByTestId('memory-card', { exact: false })
  return cards.length === rows * columns
}
