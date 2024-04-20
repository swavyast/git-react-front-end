import axios from "axios";
import { AuthContext } from "../components/class-components/context/AuthContext";

const GIT_API_URL = 'https://api.github.com/users';
const GIT_BASE_URL = 'https://github.com'

class GitHubService {
    constructor () {
        this.state = {};
    }
    getUserDetails ( username ) {
        return axios.get( `${GIT_API_URL}/${ username }` )
            .then( ( res ) => res.data )
            .catch( ( error ) => { throw error; } );
    }
    getRepositories (username) {
        return axios.get( `${GIT_API_URL}/${ username }/repos` )
            .then( ( res ) => res.data )
            .catch( ( error ) => { throw error; } );
    }
    getRepositoryByName ( username, name ) {
        return axios.get(`${GIT_BASE_URL}/${username}/${name}`)
            .then( ( res ) => res.data )
            .catch( ( error ) => { throw error; } );
    }

}

export default new GitHubService();