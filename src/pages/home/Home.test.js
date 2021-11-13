import { render, screen } from '@testing-library/react';
import { Home } from './Home';

const sentence = 'Are you in GitHub? Yes, then show me your work!';

test('renders the Home page with a sentence and a image', () => {
    render(<Home />);

    const textEl = screen.getByText(sentence);
    const imageEl = screen.getByRole('img');

    expect(textEl).toBeInTheDocument();
    expect(imageEl).toBeInTheDocument();
})