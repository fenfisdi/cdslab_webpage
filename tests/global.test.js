import React from 'react'
import { render } from '@testing-library/react'
import Header from '@components/layouts/Header'

describe('this is a test', ()=> {
  test('check testing', ()=> {
    expect('hello world').toBe('hello world')
  })
})


describe('<Header />', () => {
  test('Renders <Header /> component correctly', () => {
    const { getByText } = render(<Header />)
    expect(getByText(/CDSLAB/i)).toBeInTheDocument()
  })
})