import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/api/v1/users';

class UserService {

    registerUser ( user ) {
        user.preventDefault();
        return axios.post(USER_API_BASE_URL, user)
        .then((res)=>{return res.data;})
        .catch(error =>{throw error})
    }

    loginUser ( user ) {
        return axios.get(USER_API_BASE_URL, user.username)
        .then((res)=>{return res.data;})
        .catch((error) =>{throw error});
    }

    getUserByUsername(username){

        return axios.get(USER_API_BASE_URL, username)
        .then((res)=>res.data)
        .catch(error=>{throw error});
    }

    logoutUser ( user ) {
        return console.log("logout");
    }
}

export default new UserService();