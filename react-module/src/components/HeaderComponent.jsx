import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function NavigatorHook () {
    const navigate = useNavigate();
    const [ isAuthenticated, setIsAuthenticated ] = useState( false );
    // console.log(this.props.navigate);

    return <HeaderComponent navigate={navigate} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />;
}

class HeaderComponent extends React.Component {
    constructor ( props ) {
        super( props );
        this.state = {};
    }

    render () {
        // const isAuthenticated = this.props;
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <h1 className="navbar-brand text-center mt-0 mb-0"><a href="/" className="nav-link"><FontAwesomeIcon icon={faGithub} /> Git Manager</a></h1>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contacts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Support</a>
                                </li>
                            </ul>
                            <form className="d-inline-flex my-auto">
                                <input className="form-control" style={{maxHeight:'35px'}} type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-sm btn-dark mx-1" style={{maxHeight:'35px'}} type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <h3 className='text-center mb-0' style={{marginTop:'60px'}}><a href='/' className='nav-link pe-auto'><FontAwesomeIcon icon={faHome} /></a></h3>
            </div>
        );
    }
}

HeaderComponent.propTypes = {};

export default NavigatorHook;
