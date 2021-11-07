import { useState } from "react";
import { getUser, getUserRepos, getUserStarred } from "../../services";


export const App = () => {

    const [ gitHubState, setGitHubState ] = useState({
        hasUser: false,
        loading: false,
        user: {
            avatar: undefined,
            login: undefined,
            name: undefined,
            publicUrl: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0
        },
        repositories: [],
        starred: []
    });

    const handleUsername = (ev) => {
        setGitHubState(prevState => ({
            ...prevState,
            user: {
                name: ev.target.value
            }
        }));
    };

    const submitGetUser = () => {
        if(!gitHubState.user.name) return;

        setGitHubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading
        }));

        getUser(gitHubState.user.name).then(response => {
            setGitHubState(prevState => ({
                ...prevState,
                hasUser: true,
                user: {
                    avatar: response.avatar_url,
                    login: response.login,
                    name: response.name,
                    publicUrl: response.html_url,
                    blog: response.blog,
                    company: response.company,
                    location: response.location,
                    followers: response.followers,
                    following: response.following,
                    public_gists: response.public_gists,
                    public_repos: response.public_repos
                },

            }));
        }).finally(() => {
            setGitHubState((prevState) => ({
                ...prevState,
                loading: !prevState.loading
            }))
        });

        getUserRepos(gitHubState.user.name).then(response => {
            setGitHubState(prevState => ({
                ...prevState,
                repositories: response
            }))
        });

        getUserStarred(gitHubState.user.name).then(response => {
            setGitHubState(prevState => ({
                ...prevState,
                starred: response
            }))
        });
        
    }

    return (
        <main> 
            <section>
                <header>
                    <div>
                        <input type='text' placeholder='Your username' onChange={handleUsername} />
                        <button type='submit' onClick={submitGetUser}>Show my work</button>
                    </div>
                </header>
                {gitHubState.hasUser ? (
                    <>
                        {gitHubState.loading ? (
                            <p>Loading...</p>
                            ) : (
                            <>
                                <h1>UserProfile</h1>
                                <h3>Repositories</h3>
                            </>
                        )}
                    </>
                ) : (
                    <h1>Home</h1>
                )}
            </section>
        </main>
    );
}