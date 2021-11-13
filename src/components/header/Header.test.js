import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "./Header";

test('renders an input and a button', () => {
    render(<Header />);

    const inputEl = screen.getByRole('textbox');
    const buttonEl = screen.getByRole('button');

    expect(inputEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
})

test('calls a callback when input is changed', () => {
    const callback = jest.fn();

    render(<Header onChange={callback} />);

    const inputEl = screen.getByRole('textbox');

    fireEvent.change(inputEl, {target: {value: 't'}});

    expect(callback).toHaveBeenCalledTimes(1);
})

test('calls a callback when button is pressed', () => {
    const callback = jest.fn();

    render(<Header onClick={callback} />);

    const buttonEl = screen.getByRole('button');

    fireEvent.click(buttonEl);

    expect(callback).toHaveBeenCalledTimes(1);
})