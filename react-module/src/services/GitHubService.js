import axios from "axios";

const GIT_API_URL = 'https://api.github.com/repos';
const GIT_API_REPO_URL = 'https://api.github.com/users/${username}/repos';
const GIT_API_FULL_URL = 'https://api.github.com/users/swavyast/repos';

class GitHubService {
    constructor () {
        this.state = {};
    }
    getUserDetails ( username ) {
        return axios.get( `${GIT_API_URL}/${ username }` )
            .then( ( res ) => res.data )
            .catch( ( error ) => { throw error; } );
    }
    getRepositories () {
        return axios.get( GIT_API_FULL_URL )
            .then( ( res ) => res.data )
            .catch( ( error ) => { throw error; } );
    }
    getRepositoryByName ( username, name ) {
        return axios.get(`${GIT_API_URL}/${username}/${name}`)
            .then( ( res ) => res.data )
            .catch( ( error ) => { throw error; } );
    }

}

export default new GitHubService();