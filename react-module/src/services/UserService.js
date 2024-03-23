import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const USER_API_BASE_URL = 'https://localhost:3000/api/v1/users';

function NavigatorHook () {
    const navigate = useNavigate();
    const [ isAuthenticated, setIsAuthenticated ] = useState( false );
    const userService = new UserService();
    userService.setIsAuthenticated(isAuthenticated);
    userService.setNavigate(navigate);
    return null;
}

class UserService {

    register ( user ) {
        this.setIsAuthenticated( true );
        return axios.post(USER_API_BASE_URL, user);
    }

    login ( user ) {
        this.setIsAuthenticated( true );
        this.navigate( 'user/' + user.username );
        return axios.get(USER_API_BASE_URL, user);
    }

    logout ( user ) {
        this.setIsAuthenticated( false );
        return user;
    }
}

export default NavigatorHook;