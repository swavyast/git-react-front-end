import axios from "axios";

const GIT_API_BASE_URL = 'https://api.github.com/users/swavyast/repos';

class GitHubService {
    constructor () {
        this.state = {};
    }
    getUserDetails () {
        return axios.get( GIT_API_BASE_URL )
            .then( ( res ) => res.data )
            .catch( ( error ) => { throw error; } );
    }
    getRepositories () {
        return axios.get( GIT_API_BASE_URL )
            .then( ( res ) => res.data )
            .catch( ( error ) => { throw error; } );
    }
    getRepositoryByName (name) {
        return axios.get( '{GIT_API_BASE_URL}/${name}' )
            .then( ( res ) => res.data )
            .catch( ( error ) => { throw error; } );
    }

}

export default new GitHubService();