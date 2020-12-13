import React from 'react'
import { render, screen, within } from '@testing-library/react'
import App from './App'

test('renders Head Text', () => {
  render(<App />)
  const headText = screen.getByText(/Available List IDs/i)
  const subText = screen.getByText('Select chips to view the list')
  expect(headText).toBeInTheDocument()
  expect(subText).toBeInTheDocument()
})

test('renders FilterChips component with correct number of chips', () => {
  const { getByTestId } = render(<App />)
  const chips = getByTestId('chips')
  const chip = within(chips).getAllByTestId('chip')
  expect(chip.length).toBe(4)
})
