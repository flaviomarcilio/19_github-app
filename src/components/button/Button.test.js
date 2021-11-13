import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test('renders a button with text', () => {
    render(<Button>text</Button>);

    const buttonEl = screen.getByText('text');

    expect(buttonEl).toBeInTheDocument();
})