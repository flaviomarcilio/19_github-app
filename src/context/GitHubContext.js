import { createContext, useCallback, useState } from 'react';
import { GitHubApi } from '../services';

export const GitHubContext = createContext({
    user: {},
    repositories: [],
    starred: [],
    loading: false
});

export const GitHubProvider = ({ children }) => {
    const [gitHubState, setGitHubState] = useState({
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

    const getUser = (username) => {
        setGitHubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading
        }));

        GitHubApi.get(`users/${username}`).then(
            ({data}) => {
                setGitHubState(prevState => ({
                    ...prevState,
                    hasUser: true,
                    user: {
                        avatar: data.avatar_url,
                        login: data.login,
                        name: data.name,
                        publicUrl: data.html_url,
                        blog: data.blog,
                        company: data.company,
                        location: data.location,
                        followers: data.followers,
                        following: data.following,
                        public_gists: data.public_gists,
                        public_repos: data.public_repos
                    },
                }));
            }
        ).finally(() => {
            setGitHubState((prevState) => ({
                ...prevState,
                loading: !prevState.loading
            }))
        })
    };

    const getUserRepos = (username) => {
        GitHubApi.get(`users/${username}/repos`)
                .then(({data}) => {
                        setGitHubState(prevState => ({
                            ...prevState,
                            repositories: data
                        }));
                    }
                )
    }

    const getUserStarred = (username) => {
        GitHubApi.get(`users/${username}/starred`)
                .then(({data}) => { console.log('starred: ' + JSON.stringify(data))
                        setGitHubState(prevState => ({
                            ...prevState,
                            starred: data
                        }));
                    }
                )
    }

    const contextValue = {
        gitHubState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), []),
    }

    return (
        <GitHubContext.Provider value={contextValue}>{children}</GitHubContext.Provider>
    )
}