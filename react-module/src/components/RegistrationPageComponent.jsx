import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function NavigatorHook () {
    const navigate = useNavigate();
    const [ isAuthenticated, setIsAuthenticated ] = useState( false );

    return <RegistrationPageComponent navigate={navigate} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />;
}

class RegistrationPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            username : '',
            email : '',
            password : ''
        };
        this.submitHandler = this.submitHandler.bind( this );
    }
    submitHandler () { 
        const {name, username, email, password} = this.state;
        const user = {name, username, email, password};
        console.log(JSON.stringify(user));
        this.props.navigate('/user/'+username);
    }
    render() {
        return (
            <div>
                <div className='container p-5'>
                    <h3 className='text-center'><a onClick={()=>this.props.navigate('/')} className='nav-link pe-auto'><FontAwesomeIcon icon={faHome} /></a></h3>
                    <div className='card shadow-lg p-5'>
                        <form onSubmit={this.submitHandler}>
                            <div className='card shadow-dark-md m-3 p-3'>
                                <div className='container p-4'>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className='row form-group p-2'>
                                                <label className='col' htmlFor='name'>Name :</label>
                                                <input className='col form-input' type='text' placeholder='Your Full Name' name='name' id='name' />
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='row form-group p-2'>
                                                <label className='col' htmlFor='username'>Username :</label>
                                                <input className='col form-input' type='text' placeholder='Github Username' name='username' id='username' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className='row form-group p-2'>
                                                <label className='col' htmlFor='email'>Email :</label>
                                                <input className='col form-input' type='text' placeholder='Github Email' name='email' id='email' />
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='row form-group p-2'>
                                                <label className='col' htmlFor='password'>Password :</label>
                                                <input className='col form-input' type='text' placeholder='Github Access Token' name='password' id='password' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row form-group'>
                                        <input className='col-md-6 form-input mx-auto mt-5' type='submit' value='Submit' name='submit' id='submit' />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

RegistrationPageComponent.propTypes = {};

export default RegistrationPageComponent;
