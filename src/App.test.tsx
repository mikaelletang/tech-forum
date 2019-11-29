import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, getByTestId, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('the counter ', () => {
  it('has a title', () => {
    const { getByText } = render(
        <App />
    )
    expect(getByText('Counter')).not.toBeNull()
  })

  // check counter starts with 11

  it('has an increment button', () => {
    const { getByTestId } = render(
        <App />
    )
    const incrementBtn = getByTestId('incrementBtn')
    expect(incrementBtn).not.toBeNull()
    expect(incrementBtn).toHaveTextContent('+')
  })

  it('can be incremented', () => {
    const { getByTestId } = render(
        <App />
    )
    const incrementBtn = getByTestId('incrementBtn')
    fireEvent.click(incrementBtn)
    const counterValue = getByTestId('counterValue')
    expect(counterValue).toHaveTextContent('12')
  })

  // test decrement


  // test value from external service (for testing purposes, a function in a module)
})

