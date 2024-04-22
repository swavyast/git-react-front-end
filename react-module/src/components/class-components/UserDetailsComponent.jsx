import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import UserService from '../../services/UserService';
import ErrorBoundary from './ErrorBoundary';
import { AuthContext, MessageContext, TokenContext, UserContext } from './context/AuthContext';
import { createBrowserHistory } from 'history';
import { FontAwesomeIcon, faGithub } from '../../index';


class UserDetailsComponent extends React.Component {
    constructor ( props ) {
        super( props );
        this.state = {
            fname: '',
            lname: '',
            username: '',
            email: '',
            password: '',
            accesstoken: '',
            //additional details
            dob: '',
            age: '',
            gender: '',
            phone: '',
            //custom history props
            history: '',
            //github repo array
            repos: []
        };
        this.fetchUserByUsername = this.fetchUserByUsername.bind( this );
        this.fetchUserByUserId = this.fetchUserByUserId.bind( this );
        this.submitHandler = this.submitHandler.bind( this );
        this.handleChange = this.handleChange.bind( this );
        this.history = createBrowserHistory();
        // this.createCard = this.createCard.bind( this );
    }
    fetchUserByUsername ( username ) {

        const userService = new UserService( AuthContext, TokenContext, MessageContext, UserContext );
        return userService.getUserByUsername( username )
            .then( userData => {
                console.log( 'JSON.stringify(userData) in fetchUserByUsername function : ' + JSON.stringify( userData ) );
                this.setState( {
                    fname: userData.fname,
                    lname: userData.lname,
                    username: userData.username,
                    email: userData.email,
                    password: userData.password,
                    accesstoken: userData.accesstoken,
                    dob: userData.dob,
                    age: userData.age,
                    gender: userData.gender,
                    phone: userData.phone
                } );
            } )
            .catch( error => {
                console.error( 'Error fetching user data:', error );
            } );
    }
    fetchUserByUserId ( id ) {

        const userService = new UserService( AuthContext, TokenContext, MessageContext, UserContext );
        return userService.getUserByUserId( id )
            .then( userData => {
                console.log( 'JSON.stringify(userData) in fetchUserByUserId function : ' + JSON.stringify( userData ) );
                this.setState( {
                    fname: userData.fname,
                    lname: userData.lname,
                    username: userData.username,
                    email: userData.email,
                    password: userData.password,
                    accesstoken: userData.accesstoken
                } );
            } )
            .catch( error => {
                console.error( 'Error fetching user data:', error );
            } );
    }

    submitHandler ( e, authContext, tokenContext, messageContext, userContext ) {
        e.preventDefault();
        const { fname, lname, username, email, password, accesstoken, dob, age, gender, phone } = this.state;
        const user = { fname, lname, username, email, password, accesstoken, dob, age, gender, phone };
        console.log( 'JSON.stringify( user ) in submitHandler : ' + JSON.stringify( user ) );
        const userService = new UserService( authContext, tokenContext, messageContext, userContext );
        if ( authContext.isAuthenticated ) {
            userService.logoutUser();
        }
        userService.updateUser( user )
            .then( res => {
                console.log( '[ logging response in submitHandler : ' + res + ' ]' );
                this.history.push( `/users/${ username } ` );
                return user;
            } )
            .catch( error => console.log( error ) )
            ;
    }

    handleChange ( event ) {
        const { name, value } = event.target;
        this.setState( { [ name ]: value } );
    }

    componentDidMount () {
        console.log( 'this.props : ' + this.props );
        const { username } = this.props;
        console.log( 'username with usePAarams hook : ' + username );
        this.setState( { username } );
        this.history.push( `/users/${ username }` );

        this.fetchUserByUsername( username );
        console.log( 'this.fetchUserByUsername( username ) in componentDidMount function : ' + this.fetchUserByUsername( username ) );
    }

    render () {

        return <ErrorBoundary>
            <AuthContext.Consumer>
                {
                    ( authContext ) => (
                        <TokenContext.Consumer>
                            {
                                ( tokenContext ) => (
                                    <MessageContext.Consumer>
                                        {
                                            ( messageContext ) => (
                                                <UserContext.Consumer>
                                                    {
                                                        ( userContext ) => (
                                                            <div>
                                                                <div className={( messageContext.message === 'Updated Successfully' ) ? 'text-center text-light bg-success' : 'text-center text-light bg-danger'}>{messageContext.message}</div>
                                                                <div className='container p-5'>
                                                                    <div className='card shadow-lg p-5'>
                                                                        <main className="form-signin">
                                                                            <form onSubmit={( e ) => this.submitHandler( e, authContext, tokenContext, messageContext, userContext )}>
                                                                                <h1 className="h2 mb-3 fw-normal text-center"><FontAwesomeIcon icon={faGithub} />&nbsp;</h1>
                                                                                <h1 className="h5 mb-4 fw-normal text-center">{( userContext.username != null ) ? this.state.username + '\'s Details' : 'Unknown user\'' + 's Details'}</h1>
                                                                                <div className='card shadow-dark-md m-3 p-3'>
                                                                                    <div className='container p-4'>
                                                                                        <div className='row'>
                                                                                            <div className='col'>
                                                                                                <div className='row form-group p-2'>
                                                                                                    <label className='col' htmlFor='name'>Name :</label>
                                                                                                    <input className='col form-input' type='text' placeholder='Your Full Name' name='name' id='name' value={( this.state.fname ).concat( ' ' + this.state.lname )} onChange={this.handleChange} />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className='col'>
                                                                                                <div className='row form-group p-2'>
                                                                                                    <label className='col' htmlFor='username'>Username :</label>
                                                                                                    <input className='col form-input' type='text' placeholder='Github Username' name='username' id='username' value={this.state.username} onChange={this.handleChange} />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row'>
                                                                                            <div className='col'>
                                                                                                <div className='row form-group p-2'>
                                                                                                    <label className='col' htmlFor='email'>Email :</label>
                                                                                                    <input className='col form-input' type='text' placeholder='Github Email' name='email' id='email' value={this.state.email} onChange={this.handleChange} />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className='col'>
                                                                                                <div className='row form-group p-2'>
                                                                                                    <label className='col' htmlFor='password'>Password :</label>
                                                                                                    <input className='col form-input' type='text' placeholder='Github Access Token' name='password' id='password' value={this.state.password} onChange={this.handleChange} />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row'>
                                                                                            <div className='col'>
                                                                                                <div className='row form-group p-2'>
                                                                                                    <label className='col' htmlFor='accesstoken'>Access Token :</label>
                                                                                                    <input className='col form-input' type='text' readOnly={true} placeholder='Access Token' name='accesstoken' id='accesstoken' value={this.state.accesstoken} onChange={this.handleChange} />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className='col'>
                                                                                                <div className='row form-group p-2'>
                                                                                                    <label className='col' htmlFor='dob'>Date of birth :</label>
                                                                                                    <input className='col form-input' type='date' placeholder='Date of birth' name='dob' id='dob' value={this.state.dob} onChange={this.handleChange} />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row'>
                                                                                            <div className='col'>
                                                                                                <div className='row form-group p-2'>
                                                                                                    <label className='col' htmlFor='age'>Age :</label>
                                                                                                    <input className='col form-input' type='number' placeholder='Age' name='age' id='age' value={this.state.age} onChange={this.handleChange} />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className='col'>
                                                                                                <div className='row form-group p-2'>
                                                                                                    <div id="gender-group">
                                                                                                        <label htmlFor="gender-group">Gender : </label>
                                                                                                        <div className="" style={{ marginLeft: '12em', marginTop: '-20px' }}>
                                                                                                            <div className="form-check form-switch">
                                                                                                                <input className="form-check-input" type='checkbox' id='gender' name='gender' value='MALE' onChange={this.handleChange} />
                                                                                                                <label className="form-check-label" htmlFor="gender">Male</label>
                                                                                                            </div>
                                                                                                            <div className="form-check form-switch">
                                                                                                                <input className="form-check-input" type='checkbox' id='gender' name='gender' value='FEMALE' onChange={this.handleChange} />
                                                                                                                <label className="form-check-label" htmlFor="gender">Female</label>
                                                                                                            </div>
                                                                                                            <div className="form-check form-switch">
                                                                                                                <input className="form-check-input" type='checkbox' id='gender' name='gender' value='OTHERS' onChange={this.handleChange} />
                                                                                                                <label className="form-check-label" htmlFor="gender">Other</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row w-50">
                                                                                            <div className='col'>
                                                                                                <div className='row form-group p-2'>
                                                                                                    <label className='col' htmlFor='phone'>Phone :</label>
                                                                                                    <input className='col form-input' type='tel' placeholder='Your contact number' name='phone' id='phone' value={this.state.phone} onChange={this.handleChange} />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row form-group'>
                                                                                            <button className="w-50 btn btn-lg btn-dark mt-5 mx-auto" type="submit">Update</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </form>
                                                                        </main>
                                                                    </div>
                                                                </div>
                                                                <div className="container">
                                                                    {/* {cardArray} */}
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                </UserContext.Consumer>
                                            )
                                        }
                                    </MessageContext.Consumer>
                                )
                            }
                        </TokenContext.Consumer>
                    )
                }
            </AuthContext.Consumer>
        </ErrorBoundary>;
    }
}

UserDetailsComponent.propTypes = {
    fname: PropTypes.string,
    lname: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    accesstoken: PropTypes.string,
    history: PropTypes.object,
    repos: PropTypes.array
};

const UserDetailsWrapper = () => {
    const { username } = useParams();
    const { location } = useNavigate();
    return <UserDetailsComponent username={username} location={location} />;
};

export default UserDetailsWrapper;
