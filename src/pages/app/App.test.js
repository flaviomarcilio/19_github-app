import { render, screen } from "@testing-library/react";
import { App } from ".";

const text = 'Are you in GitHub? Yes, then show me your work!';

test('renders the app with a input, a button, a text and a image', () => {
    render(<App />);

    const inputEl = screen.getByRole('textbox');
    const buttonEl = screen.getByRole('button');
    const textEl = screen.getByText(text);
    const imageEl = screen.getByRole('img');

    expect(inputEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
    expect(textEl).toBeInTheDocument();
    expect(imageEl).toBeInTheDocument();
})