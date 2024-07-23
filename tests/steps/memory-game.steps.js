import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Game from '../../src/components/game'

export function openTheGame () {
  render(<Game />)
}

export function memoryTableDimensionsValidation (rows, columns) {
  const cells = screen.getAllByTestId('minefield-cell', { exact: false })
  return cells.length === rows * columns
}
