import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import UserService from '../../services/UserService';

class UserDetailsComponent extends React.Component {
    constructor ( props ) {
        super( props );
        this.state = {
            name: props.name,
            username: props.username,
            email: props.email,
            password: props.password,
            repos:[]
        };
        this.fetchUserData = this.fetchUserData.bind( this );
        // this.createCard = this.createCard.bind( this );
    }
    fetchUserData ( username ) {
        const user = UserService.getUserByUsername( username );

        return user;
    }

    componentDidMount () {
        this.fetchUserData( this.props.username )
            .then( userData => {
                this.setState( {
                    name: userData.name,
                    username: userData.username,
                    email: userData.email,
                    password: userData.password
                } );
            } )
            .catch( error => {
                console.error( 'Error fetching user data:', error );
            } );
    }

    render () {
        const username = this.props.username;
        return (
            <div>
                <div className='container p-5'>
                    <div className='card shadow-lg p-5'>
                        <main className="form-signin">
                            <form onSubmit={this.submitHandler}>
                                <h1 className="h2 mb-3 fw-normal text-center"><FontAwesomeIcon icon={faGithub} />&nbsp;</h1>
                                <h1 className="h5 mb-4 fw-normal text-center">{( username != null ) ? username + '\'s Details' : 'Unknown user\'' + 's Details'}</h1>
                                <div className='card shadow-dark-md m-3 p-3'>
                                    <div className='container p-4'>
                                        <div className='row'>
                                            <div className='col'>
                                                <div className='row form-group p-2'>
                                                    <label className='col' htmlFor='name'>Name :</label>
                                                    <input className='col form-input' type='text' placeholder='Your Full Name' name='name' id='name' value={this.state.name} onChange={this.handleChange} />
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
                                                    <label className='col' htmlFor='dob'>Date of birth :</label>
                                                    <input className='col form-input' type='text' placeholder='Date of birth' name='dob' id='dob' value={this.state.dob} onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className='row form-group p-2'>
                                                    <label className='col' htmlFor='age'>Age :</label>
                                                    <input className='col form-input' type='text' readOnly={true} placeholder='Age' name='password' id='password' value={this.state.age} onChange={this.handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col'>
                                                <div className='row form-group p-2'>
                                                    <div id="gender-group">
                                                        <label htmlFor="gender-group">Gender : </label>
                                                        <div className="" style={{ marginLeft: '12em', marginTop: '-20px' }}>
                                                            <div class="form-check form-switch">
                                                                <input className="form-check-input" type='checkbox' id='gender' name='gender' value={this.state.gender} onChange={this.handleChange} />
                                                                <label className="form-check-label" htmlFor="gender">Male</label>
                                                            </div>
                                                            <div class="form-check form-switch">
                                                                <input className="form-check-input" type='checkbox' id='gender' name='gender' value={this.state.gender} onChange={this.handleChange} />
                                                                <label className="form-check-label" htmlFor="gender">Female</label>
                                                            </div>
                                                            <div class="form-check form-switch">
                                                                <input className="form-check-input" type='checkbox' id='gender' name='gender' value={this.state.gender} onChange={this.handleChange} />
                                                                <label className="form-check-label" htmlFor="gender">Other</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
        );
    }
}

UserDetailsComponent.propTypes = {};

export default UserDetailsComponent;
