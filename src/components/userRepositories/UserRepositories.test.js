import { render, screen, fireEvent } from "@testing-library/react";
import { UserRepositories } from "./UserRepositories";

test('activates second tab when clicking on it', () => {
    render(<UserRepositories />);

    const repositoriesTabEl = screen.getByRole('tab', { name: 'Repositories' });
    const starredTabEl = screen.getByRole('tab', { name: 'Starred' });

    expect(repositoriesTabEl).toHaveAttribute('aria-selected', 'true');
    expect(starredTabEl).toHaveAttribute('aria-selected', 'false');

    fireEvent.click(starredTabEl);

    expect(repositoriesTabEl).toHaveAttribute('aria-selected', 'false');
    expect(starredTabEl).toHaveAttribute('aria-selected', 'true');
})