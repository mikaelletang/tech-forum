import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, getByTestId } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import App from './App';
import * as externalService from "./externalService";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("the counter ", () => {
  let mock: jest.SpyInstance;
  beforeEach(() => {
    mock = jest
      .spyOn(externalService, "externalServiceCall")
      .mockImplementation(value => value)
  })

  afterEach(() => {
    mock.mockReset()
  })

  it("has a title 'Counter'", () => {
    const { getByText } = render(<App />)
    const title = getByText("Counter")
    expect(title).not.toBeNull()
  })

  it("has a start value of 0", () => {
    const app = render(<App />)
    const counterValue = getByTestId(app.container, "counterValue")
    expect(counterValue).not.toBeNull()

    expect(externalService.externalServiceCall).toHaveBeenCalledTimes(1)
    expect(externalService.externalServiceCall).toHaveBeenLastCalledWith(11)
    expect(counterValue).toHaveTextContent("11")
  })

  it("has a increment button", () => {
    const { getByTestId } = render(<App />)
    const incrementBtn = getByTestId("incrementBtn")
    expect(incrementBtn).not.toBeNull()
    expect(incrementBtn).toHaveTextContent("+")
  })

  it("can be incremented", () => {
    const { getByTestId } = render(<App />)
    const incrementBtn = getByTestId("incrementBtn")
    const counterValue = getByTestId("counterValue")
    expect(counterValue).not.toBeNull()
    expect(counterValue).toHaveTextContent("11")
    fireEvent.click(incrementBtn)
    expect(counterValue).toHaveTextContent("12")
  })

  it("has a decrement button", () => {
    const { getByTestId } = render(<App />)
    const decrementBtn = getByTestId("decrementBtn")
    expect(decrementBtn).not.toBeNull()
    expect(decrementBtn).toHaveTextContent("-")
  })

  it("can be decremented", () => {
    const { getByTestId } = render(<App />)
    const decrementBtn = getByTestId("decrementBtn")
    const counterValue = getByTestId("counterValue")
    expect(counterValue).not.toBeNull()
    expect(counterValue).toHaveTextContent("11")
    fireEvent.click(decrementBtn)
    expect(counterValue).toHaveTextContent("10")
  })

})
