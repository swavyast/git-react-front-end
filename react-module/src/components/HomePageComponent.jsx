import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationPageComponent from './RegistrationPageComponent';
import UserDetailsComponent from './UserDetailsComponent';

function NavigatorHook () {
    const navigate = useNavigate();
    const [ isAuthenticated, setIsAuthenticated ] = useState( false );

    return <HomePageComponent navigate={navigate} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />;
}

class HomePageComponent extends React.Component {
    constructor ( props ) {
        super( props );
        this.state = {};
        this.handleLogin = this.handleLogin.bind( this );
        this.handleLogout = this.handleLogout.bind( this );
    }

    handleLogin ( username ) {
        this.props.setIsAuthenticated( true );
        this.props.navigate( 'user/' + username );
    }
    handleLogout () {
        this.props.setIsAuthenticated( false );
        this.props.navigate( 'register' );
    }

    render () {
        const {isAuthenticated} = this.props;
        return (
            <div>
                {isAuthenticated ? (
                    <UserDetailsComponent onLogout={this.handleLogout} />
                ) : (
                    <RegistrationPageComponent onLogin={this.handleLogin} navigate={this.props.navigate} />
                )}
            </div>
        );
    }
}

HomePageComponent.propTypes = {};

export default NavigatorHook;