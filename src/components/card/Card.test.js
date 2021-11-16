import { render, screen } from "@testing-library/react";
import { Card } from './Card';

const name = 'Name';
const fullname = 'Fullname';
const link = 'https://repositories.com';

test('render a card with a name, a fullname', () => {
    render(<Card />);

    const nameEl = screen.getByRole('heading', {level: 2});
    const fullnameEl = screen.getByRole('heading', {level: 4});

    expect(nameEl).toBeInTheDocument();
    expect(fullnameEl).toBeInTheDocument();
})

test('render received name, fullname, and link', () => {
    render(<Card name={name} fullname={fullname} link={link} />);

    const nameEl = screen.getByText(name);
    const fullnameEl = screen.getByText(fullname);
    const linkEl = screen.getByText(fullname).closest('a');

    expect(nameEl).toBeInTheDocument();
    expect(fullnameEl).toBeInTheDocument();
    expect(linkEl).toHaveAttribute('href', link);
})