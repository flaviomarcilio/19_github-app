import axios from 'axios';

const gitHubApi = axios.create({
    baseURL: process.env.REACT_APP_GITHUBAPI
});

export const getUser = async (username) => {
        
    return gitHubApi.get(`users/${username}`).then(response => response.data);
    
};

export const getUserRepos = async (username) => {

    return gitHubApi.get(`users/${username}/repos`).then(response => response.data);
    
}

export const getUserStarred = async (username) => {

    return gitHubApi.get(`users/${username}/starred`).then(response => response.data);

}