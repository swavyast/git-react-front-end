import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import UserService from '../../services/UserService';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function NavigatorHook () {
    const navigate = useNavigate();
    const [ isAuthenticated, setIsAuthenticated ] = useState( false );

    return <LoginPageComponent navigate={navigate} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />;
}

class LoginPageComponent extends React.Component {
    constructor ( props ) {
        super( props );
        this.state = {
            username: '',
            password: ''
        };
    }

    handleLogin () {
        const { username, password } = this.state;
        const user = { username, password };
        UserService.loginUser( user ).then( ( x ) => {
            if ( x ) {
                this.props.setIsAuthenticated( true );
            }
        } ).catch( error => console.log( error ) );
    }

    render () {
        return (
            <div className='mt-5'>
                <div className="container-fluid p-0">
                    <div className="col-md-6 offset-3">
                        <div className="text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '75vh', width: '35em', marginLeft: '18px' }}>
                            <div className="card shadow-lg col-md-8 offset-2 px-5 pt-3">
                                <main className="form-signin">
                                    <form>
                                        <h1 className="h3 mb-3 fw-normal"><FontAwesomeIcon icon={faGithub} />&nbsp;</h1>
                                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={this.handleChange} />
                                            <label htmlFor='floatingInput'>Email address</label>
                                        </div>
                                        <div className="form-floating mt-2">
                                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={this.handleChange} />
                                            <label htmlFor="floatingPassword">Password</label>
                                        </div>

                                        <div className="checkbox mb-3 mt-2">
                                            <label>
                                                <input type="checkbox" value="remember-me" onChange={this.handleChange} /> Remember me
                                            </label>
                                        </div>
                                        <button className="w-100 btn btn-lg btn-dark" type="submit" onSubmit={this.handleLogin}>Sign in</button>
                                        <div className="text-center text-muted mt-3">
                                            New user? <a href="/register" className="nav-link text-dark">Register</a>
                                        </div>
                                        <p className="text-center text-muted my-3">&copy;marketListing</p>
                                    </form>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

LoginPageComponent.propTypes = {
    navigate: PropTypes.func,
    isAuthenticated: PropTypes.bool,
    setIsAuthenticated: PropTypes.func
};

export default NavigatorHook;
