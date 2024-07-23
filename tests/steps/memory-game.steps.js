import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Game from '../../src/components/game'

export function openTheGame () {
    render(<Game />)
}

