import { useState } from "react";
import { Home } from "..";
import { Header, UserProfile, UserRepositories } from "../../components";
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

    const [username, setUsername] = useState('');

    // const handleUsername = (ev) => {
    //     setGitHubState(prevState => ({
    //         ...prevState,
    //         user: {
    //             name: ev.target.value
    //         }
    //     }));
    // };

    const submitGetUser = () => {
        // if(!gitHubState.user.name) return;
        if(!username) return;

        setGitHubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading
        }));

        getUser(username).then(response => {
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

        getUserRepos(username).then(response => {
            setGitHubState(prevState => ({
                ...prevState,
                repositories: response
            }))
        });

        getUserStarred(username).then(response => {
            setGitHubState(prevState => ({
                ...prevState,
                starred: response
            }))
        });
        
    }

    return (
        <main> 
            <section>
                <Header onClick={submitGetUser} onChange={setUsername} />
                {gitHubState.hasUser ? (
                    <>
                        {gitHubState.loading ? (
                            <p>Loading...</p>
                            ) : (
                            <>
                                <UserProfile user={gitHubState.user} />
                                <UserRepositories 
                                    repositories={gitHubState.repositories}
                                    starred={gitHubState.starred}
                                />
                            </>
                        )}
                    </>
                ) : (
                    <Home />
                )}
            </section>
        </main>
    );
}