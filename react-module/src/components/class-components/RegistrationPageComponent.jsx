import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from './ErrorBoundary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserService from '../../services/UserService';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class RegistrationPageComponent extends React.Component {
    constructor ( props ) {
        super( props );
        this.state = {
            name: '',
            username: '',
            email: '',
            password: ''
        };
        this.submitHandler = this.submitHandler.bind( this );
        this.handleChange = this.handleChange.bind( this );
    }
    handleChange ( event ) {
        const { name, value } = event.target;
        this.setState( { [ name ]: value } );
    }
    submitHandler ( event ) {
        event.preventDefault();
        const { setNavigate } = this.props;
        const { name, username, email, password } = this.state;
        const user = { name, username, email, password };
        console.log( JSON.stringify( user ) );
        UserService.registerUser( user ).then( ( res ) => {
            setNavigate( '/users/' + username );
            return user;
        } );
    }
    render () {
        return <ErrorBoundary>
            <div>
                <div className='container p-5'>
                    <div className='card shadow-lg p-5'>
                        <main className="form-signin">
                            <form onSubmit={this.submitHandler}>
                                <h1 className="h2 mb-3 fw-normal text-center"><FontAwesomeIcon icon={faGithub} />&nbsp;</h1>
                                <h1 className="h5 mb-4 fw-normal text-center"><span className='d-inline-flex'>Already registered?&nbsp;<a href='/login' className='nav-link pe-auto text-success'>Login</a>&nbsp; here.</span></h1>
                                <div className='card shadow-dark-md m-3 p-3'>
                                    <div className='container p-4'>
                                        <div className='row'>
                                            <div className='col'>
                                                <div className='row form-group p-2'>
                                                    <label className='col' htmlFor='name'>Name :</label>
                                                    <input className='col form-input' type='text' placeholder='Your Full Name' name='name' id='name' onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className='row form-group p-2'>
                                                    <label className='col' htmlFor='username'>Username :</label>
                                                    <input className='col form-input' type='text' placeholder='Github Username' name='username' id='username' onChange={this.handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col'>
                                                <div className='row form-group p-2'>
                                                    <label className='col' htmlFor='email'>Email :</label>
                                                    <input className='col form-input' type='text' placeholder='Github Email' name='email' id='email' onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className='row form-group p-2'>
                                                    <label className='col' htmlFor='password'>Password :</label>
                                                    <input className='col form-input' type='text' placeholder='Github Access Token' name='password' id='password' onChange={this.handleChange} />
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
                </div>
            </div>
        </ErrorBoundary>;
    }
}

RegistrationPageComponent.propTypes = {};

export default RegistrationPageComponent;
