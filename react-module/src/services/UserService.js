import axios from 'axios';

const USER_BASE_API = 'https://localhost:3000/api/v1/users';

class UserService {

    register ( user ) {

        return axios.post(USER_BASE_API);
    }

    login ( user ) {
        this.props.setIsAuthenticated( true );
        this.props.navigate( 'user/' + user.username );
        return axios.get(USER_BASE_API);
    }

    logout ( user ) {

        return user;
    }
}

export default new UserService();