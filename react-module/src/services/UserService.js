import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/api/v1/users';

class UserService {
    constructor(authContext, tokenContext, messageContext, userContext) {
        this.isAuthenticated = authContext.isAuthenticated;
        this.setIsAuthenticated = authContext.setIsAuthenticated;
        this.setMessage = messageContext.setMessage;
    }

    registerUser(user) {
        console.log('registerUser method call : ' + JSON.stringify(user));

        if (!this.isAuthenticated) {
            return axios.post(USER_API_BASE_URL, user)
                .then((res) => {
                    if (res.status === 200) {
                        this.setIsAuthenticated(true);
                        this.setMessage('Registered Successfully');
                        return res.data;
                    } else {
                        this.setIsAuthenticated(false);
                        throw new Error('Registration Failed');
                    }
                })
                .catch(error => {
                    throw error;
                });
        } else {
            this.setMessage('User is already logged in.');
            return Promise.reject(new Error('User is already logged in.'));
        }
    }

    loginUser(user) {
        return axios.get(`${USER_API_BASE_URL}/${user.username}`)
            .then((res) => res.data)
            .catch((error) => {
                throw error;
            });
    }

    getUserByUsername(username) {
        return axios.get(`${USER_API_BASE_URL}/${username}`)
            .then((res) => res.data)
            .catch(error => {
                throw error;
            });
    }

    logoutUser(user) {
        console.log("logout");
    }
}

export default UserService;