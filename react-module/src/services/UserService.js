import axios from 'axios';

const USER_API_BASE_URL = 'https://localhost:3000/api/v1/users';

class UserService {

    registerUser ( user ) {
        return axios.post(USER_API_BASE_URL, user);
    }

    loginUser ( user ) {
        return axios.get(USER_API_BASE_URL, user);
    }

    logoutUser ( user ) {
        return user;
    }
}

export default new UserService();