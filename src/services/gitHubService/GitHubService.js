import axios from 'axios';

export const GitHubApi = axios.create({
    baseURL: 'https://api.github.com/'
});