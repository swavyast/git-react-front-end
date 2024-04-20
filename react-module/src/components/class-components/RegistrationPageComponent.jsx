import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext, TokenContext, MessageContext, UserContext } from './context/AuthContext';
import ErrorBoundary from './ErrorBoundary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserService from '../../services/UserService';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class RegistrationPageComponent extends React.Component {
    constructor ( props ) {
        super( props );
        this.state = {
            isAuthenticated: '',
            message: '',
            authToken: '',
            fname: '',
            lname: '',
            username: '',
            email: '',
            password: '',
            accesstoken: '',
            history: ''
        };
        this.submitHandler = this.submitHandler.bind( this );
        this.handleChange = this.handleChange.bind( this );
    }

    componentDidMount () {
        this.setState( {
            isAuthenticated: this.context.isAuthenticated,
            authToken: this.context.authToken,
            message: this.context.message,
            username: this.context.username
        } );
    }

    handleChange ( event ) {
        const { name, value } = event.target;
        this.setState( { [ name ]: value } );
    }
    submitHandler (e, authContext, tokenContext, messageContext, userContext) {
        e.preventDefault();
        const { fname, lname, username, email, password, accesstoken } = this.state;
        const user = { fname, lname, username, email, password, accesstoken };
        console.log( JSON.stringify( user ) );
        const userService = new UserService(authContext, tokenContext, messageContext, userContext);
        userService.registerUser( user )
        .then( res => {
            console.log(res);
            Navigate.to( '/users/' + username );
            return user;
        } )
        .catch(error => console.log(error))
        ;
    }

    render () {
        const { history } = this.props;
        return <ErrorBoundary>
            <AuthContext.Consumer>
                {( authContext ) => (
                    <TokenContext.Consumer>
                        {( tokenContext ) => (
                            <MessageContext.Consumer>
                                {( messageContext ) => (
                                    <UserContext.Consumer>
                                        {( userContext ) => (
                                            <div>
                                                {!userContext.isAuthenticated && (
                                                    <div className='container p-5'>
                                                        <div className='card shadow-lg p-5'>
                                                            <main className="form-signin">
                                                                <form onSubmit={(e) => this.submitHandler(e, authContext, tokenContext, messageContext, userContext)}>
                                                                    <h1 className="h2 mb-3 fw-normal text-center"><FontAwesomeIcon icon={faGithub} />&nbsp;</h1>
                                                                    <h1 className="h5 mb-4 fw-normal text-center"><span className='d-inline-flex'>Already registered?&nbsp;<a href='/login' className='nav-link pe-auto text-success'>Login</a>&nbsp; here.</span></h1>
                                                                    <div className='card shadow-dark-md m-3 p-3'>
                                                                        <div className='container p-4'>
                                                                            <div className='row'>
                                                                                <div className='col'>
                                                                                    <div className='row form-group p-2'>
                                                                                        <label className='col' htmlFor='fname'>First Name :</label>
                                                                                        <input className='col form-input' type='text' placeholder='First Name' name='fname' id='fname' onChange={this.handleChange} />
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col'>
                                                                                    <div className='row form-group p-2'>
                                                                                        <label className='col' htmlFor='lname'>Last Name :</label>
                                                                                        <input className='col form-input' type='text' placeholder='Last Name' name='lname' id='lname' onChange={this.handleChange} />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className='row'>
                                                                                <div className='col'>
                                                                                    <div className='row form-group p-2'>
                                                                                        <label className='col' htmlFor='username'>Username :</label>
                                                                                        <input className='col form-input' type='text' placeholder='Github Username' name='username' id='username' onChange={this.handleChange} />
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col'>
                                                                                    <div className='row form-group p-2'>
                                                                                        <label className='col' htmlFor='email'>Email :</label>
                                                                                        <input className='col form-input' type='text' placeholder='Github Email' name='email' id='email' onChange={this.handleChange} />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className='col'>
                                                                                    <div className='row form-group p-2'>
                                                                                        <label className='col' htmlFor='password'>Password :</label>
                                                                                        <input className='col form-input' type='password' placeholder='GitManager Password' name='password' id='password' onChange={this.handleChange} />
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col'>
                                                                                    <div className='row form-group p-2'>
                                                                                        <label className='col' htmlFor='accesstoken'>Access Token :</label>
                                                                                        <input className='col form-input' type='password' placeholder='Github Access Token' name='accesstoken' id='accesstoken' onChange={this.handleChange} />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className='row form-group'>
                                                                                <button className="w-50 btn btn-lg btn-dark mt-5 mx-auto" type="submit">Register</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </main>
                                                        </div>
                                                    </div> )
                                                } {userContext.isAuthenticated && history.push( `/users/${ userContext.username }` )}
                                            </div>
                                        )}
                                    </UserContext.Consumer>
                                )}
                            </MessageContext.Consumer>
                        )}
                    </TokenContext.Consumer>
                )}
            </AuthContext.Consumer>
        </ErrorBoundary>;
    }
}

RegistrationPageComponent.propTypes = {
    history: PropTypes.object
};

export default RegistrationPageComponent;
