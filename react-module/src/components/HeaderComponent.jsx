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
                <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div class="container-fluid">
                        <h1 className="navbar-brand text-center mt-0 mb-0"><a href="/" className="nav-link"><FontAwesomeIcon icon={faGithub} /> Git Manager</a></h1>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contacts</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Support</a>
                                </li>
                            </ul>
                            <form class="d-inline-flex my-auto">
                                <input class="form-control" style={{maxHeight:'35px'}} type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-sm btn-dark mx-1" style={{maxHeight:'35px'}} type="submit">Search</button>
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
