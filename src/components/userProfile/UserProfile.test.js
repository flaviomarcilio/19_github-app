import { render, screen } from "@testing-library/react";
import { UserProfile } from "./UserProfile";

const user = {
    avatar: 'avatar_url',
    login: 'login',
    name: 'username',
    publicUrl: 'public_url',
    blog: 'blog_url',
    company: 'company',
    location: 'location',
    followers: 1,
    following: 2,
    public_gists: 3,
    public_repos: 4
}

test('render received user information', () => {
    render(<UserProfile user={user} />);

    const imageEl = screen.getByRole('img');
    const loginEl = screen.getByText(user.login);
    const usernameEl = screen.getByText(user.name);
    const blogEl = screen.getByText(user.blog);
    const companyEl = screen.getByText(user.company);
    const locationEl = screen.getByText(user.location);
    const followersEl = screen.getByText(user.followers);
    const followingEl = screen.getByText(user.following);
    const gistsEl = screen.getByText(user.public_gists);
    const reposEl = screen.getByText(user.public_repos);


    expect(imageEl).toHaveAttribute('src', user.avatar);
    expect(loginEl).toHaveAttribute('href', user.publicUrl);
    expect(usernameEl).toBeInTheDocument();
    expect(blogEl).toHaveAttribute('href', user.blog);
    expect(companyEl).toBeInTheDocument();
    expect(locationEl).toBeInTheDocument();
    expect(followersEl).toBeInTheDocument()
    expect(followingEl).toBeInTheDocument()
    expect(gistsEl).toBeInTheDocument()
    expect(reposEl).toBeInTheDocument()
})