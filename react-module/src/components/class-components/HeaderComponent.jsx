import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHome, faAddressBook, faHandsHelping, faDownload, faInfoCircle, faPowerOff } from '../../index';
import ToggleButton from '../../assets/ToggleButton';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Container from '../../assets/Container';
import InnerContainer from '../../assets/InnerContainer';
import { AuthContext, MessageContext, TokenContext, UserContext } from './context/AuthContext';

class HeaderComponent extends React.Component {
    constructor ( props ) {
        super( props );
        this.state = {
            alertStatus: false,
        };
        this.setAlertStatus = this.setAlertStatus.bind( this );
        this.getAlertStatus = this.getAlertStatus.bind( this );
        this.dropdownHandler = this.dropdownHandler.bind( this );
    }

    setAlertStatus = () => {
        const { alertStatus } = this.state;
        this.setState( { alertStatus: !alertStatus } );
    };
    getAlertStatus = () => {
        return this.state.alertStatus;
    };

    dropdownHandler = () => {
        const { dropdownStatus, setDropdownStatus } = this.props;
        setDropdownStatus( !dropdownStatus );
    };
    dropdownStatusReset = () => {
        const { dropdownStatus, setDropdownStatus } = this.props;
        setDropdownStatus( false );
    };


    render () {
        const { isAuthenticated, setIsAuthenticated } = this.props;
        const { dropdownStatus, setDropdownStatus } = this.props;
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
                                                            <div className='p-0 m-0 bg-black position-fixed-top'>
                                                                <nav className='p-0 m-0 position-relative' style={{ opacity: '0.8', zIndex: '45' }}>
                                                                    <div className="d-inline-flex p-0 m-0">
                                                                        <div className="p-2">
                                                                            <ToggleButton dropdownHandler={this.dropdownHandler} />
                                                                        </div>
                                                                        <div className="mx-auto px-5"></div>
                                                                        <h1 className="navbar-brand text-center text-white" style={{ marginTop: '14px' }}><Link to="/" className="nav-link"><span className='fs-5'><FontAwesomeIcon icon={faGithub} /> Git Manager</span></Link></h1>
                                                                        <div className="mx-auto px-3"></div>
                                                                        <div className="d-inline-flex flex-row gap-5">
                                                                            <div className="mx-auto px-5"></div>
                                                                            <ul className='d-block bg-dark' style={{ marginTop: '10px' }}>
                                                                                <li className='d-inline'><Link className='btn btn-sm btn-dark text-light text-decoration-none fs-6' to={'/About'}><FontAwesomeIcon icon={faInfoCircle} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> About</Link></li>
                                                                                <li className='d-inline'><Link className='btn btn-sm btn-dark text-light text-decoration-none fs-6' to={'/Contact'}><span className='vr'></span><FontAwesomeIcon className='px-1' icon={faAddressBook} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Contact</Link></li>
                                                                                <li className='d-inline'><Link className='btn btn-sm btn-dark text-light text-decoration-none fs-6' to={'/Support'}><span className='vr'></span><FontAwesomeIcon className='px-1' icon={faHandsHelping} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Support</Link></li>
                                                                                <li className='d-inline' style={{ marginRight: '30px' }}><Link className='btn btn-sm btn-dark text-light text-decoration-none fs-6' to={'/Downloads'}><span className='vr'></span><FontAwesomeIcon className='px-1' icon={faDownload} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Downloads</Link></li>
                                                                            </ul>
                                                                            <div className="mx-auto px-5"></div>
                                                                            <div className="mx-auto px-5">
                                                                                <h3 className='text-center mb-0 text-white' style={dropdownStatus ? ( { marginTop: '14px', zIndex: '-1' } ) : ( { marginTop: '14px' } )} ><Link to='/' className='nav-link pe-auto fs-5'><FontAwesomeIcon icon={faHome} /><Badge className='bg-dark d-block' style={dropdownStatus ? ( { fontSize: '10px', zIndex: '-4' } ) : ( { fontSize: '10px', zIndex: '4' } )}>Home</Badge></Link></h3>
                                                                            </div>
                                                                            <ul className='d-block bg-dark p-0' style={{ marginTop: '10px' }}>
                                                                                {isAuthenticated ? (
                                                                                    <li className='d-inline my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none fs-6' to={'/logout'}><FontAwesomeIcon icon={faPowerOff} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Logout</Link></li>
                                                                                ) : (
                                                                                    <li className='d-inline my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none fs-6' to={'/login'} onMouseOver={() => {
                                                                                        this.setAlertStatus( !this.state.alertStatus );
                                                                                    }} ><FontAwesomeIcon icon={faPowerOff} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Login</Link></li>
                                                                                )}
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </nav>

                                                                {dropdownStatus && (
                                                                    <div className='pt-0 bg-danger' style={{ marginTop: '-15px', zIndex: '1000' }}
                                                                        role='button'
                                                                        tabIndex='0'
                                                                        aria-haspopup='true'
                                                                        aria-expanded='dropdownStatus'
                                                                        onMouseEnter={() => this.dropdownHandler()}
                                                                        onMouseLeave={() => this.dropdownStatusReset()}
                                                                    >
                                                                        <div className="d-flex bg-dark" style={{ zIndex: '100' }}>
                                                                            <ul className='d-block bg-dark' style={{ marginLeft: '13px', maxWidth: '90%', minHeight: '2rem', zIndex: '1002' }}>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/link1'}><FontAwesomeIcon icon={faHome} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Home</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/link2'}><FontAwesomeIcon icon={faInfoCircle} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> About</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/link3'}><FontAwesomeIcon icon={faAddressBook} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Contact</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/link4'}><FontAwesomeIcon icon={faHandsHelping} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Support</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/link5'}><FontAwesomeIcon icon={faDownload} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Downloads</Link></li>
                                                                            </ul>
                                                                            <ul className='d-block bg-dark' style={{ marginLeft: '13px', maxWidth: '90%', minHeight: '2rem', zIndex: '1002' }}>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/'}><FontAwesomeIcon icon={faHome} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Home</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/About'}><FontAwesomeIcon icon={faInfoCircle} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> About</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Contact'}><FontAwesomeIcon icon={faAddressBook} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Contact</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Support'}><FontAwesomeIcon icon={faHandsHelping} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Support</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Downloads'}><FontAwesomeIcon icon={faDownload} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Downloads</Link></li>
                                                                            </ul>
                                                                            <ul className='d-block bg-dark' style={{ marginLeft: '13px', maxWidth: '90%', minHeight: '2rem', zIndex: '1002' }}>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/'}><FontAwesomeIcon icon={faHome} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Home</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/About'}><FontAwesomeIcon icon={faInfoCircle} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> About</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Contact'}><FontAwesomeIcon icon={faAddressBook} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Contact</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Support'}><FontAwesomeIcon icon={faHandsHelping} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Support</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Downloads'}><FontAwesomeIcon icon={faDownload} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Downloads</Link></li>
                                                                            </ul>
                                                                            <ul className='d-block bg-dark' style={{ marginLeft: '13px', maxWidth: '90%', minHeight: '2rem', zIndex: '1002' }}>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/'}><FontAwesomeIcon icon={faHome} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Home</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/About'}><FontAwesomeIcon icon={faInfoCircle} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> About</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Contact'}><FontAwesomeIcon icon={faAddressBook} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Contact</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Support'}><FontAwesomeIcon icon={faHandsHelping} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Support</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Downloads'}><FontAwesomeIcon icon={faDownload} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Downloads</Link></li>
                                                                            </ul>
                                                                            <ul className='d-block bg-dark' style={{ marginLeft: '13px', maxWidth: '90%', minHeight: '2rem', zIndex: '1002' }}>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/'}><FontAwesomeIcon icon={faHome} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Home</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/About'}><FontAwesomeIcon icon={faInfoCircle} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> About</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Contact'}><FontAwesomeIcon icon={faAddressBook} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Contact</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Support'}><FontAwesomeIcon icon={faHandsHelping} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Support</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Downloads'}><FontAwesomeIcon icon={faDownload} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Downloads</Link></li>
                                                                            </ul>
                                                                            <ul className='d-block bg-dark' style={{ marginLeft: '13px', maxWidth: '90%', minHeight: '2rem', zIndex: '1002' }}>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/'}><FontAwesomeIcon icon={faHome} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Home</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/About'}><FontAwesomeIcon icon={faInfoCircle} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> About</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Contact'}><FontAwesomeIcon icon={faAddressBook} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Contact</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Support'}><FontAwesomeIcon icon={faHandsHelping} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Support</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Downloads'}><FontAwesomeIcon icon={faDownload} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Downloads</Link></li>
                                                                            </ul>
                                                                            <ul className='d-block bg-dark' style={{ marginLeft: '13px', maxWidth: '90%', minHeight: '2rem', zIndex: '1002' }}>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/'}><FontAwesomeIcon icon={faHome} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Home</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/About'}><FontAwesomeIcon icon={faInfoCircle} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> About</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Contact'}><FontAwesomeIcon icon={faAddressBook} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Contact</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Support'}><FontAwesomeIcon icon={faHandsHelping} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Support</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Downloads'}><FontAwesomeIcon icon={faDownload} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Downloads</Link></li>
                                                                            </ul>
                                                                            <ul className='d-block bg-dark' style={{ marginLeft: '13px', maxWidth: '90%', minHeight: '2rem', zIndex: '1002' }}>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/'}><FontAwesomeIcon icon={faHome} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Home</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/About'}><FontAwesomeIcon icon={faInfoCircle} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> About</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Contact'}><FontAwesomeIcon icon={faAddressBook} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Contact</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Support'}><FontAwesomeIcon icon={faHandsHelping} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Support</Link></li>
                                                                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Downloads'}><FontAwesomeIcon icon={faDownload} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Downloads</Link></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                                <Container className='w-50 p-0 m-0 bg-dark ms-auto fixed-top mt-5' style={{ zIndex: '101' }}>
                                                                    {this.state.alertStatus ? (
                                                                        <InnerContainer className='border border-info border-sm'>
                                                                            <Alert variant="black" className='m-0 p-0 w-100 text-center text-white' style={{ zIndex: '102' }} onMouseLeave={() => this.setAlertStatus( false )}>
                                                                                <Alert.Heading>Wanna see some magic ? </Alert.Heading>
                                                                                <p><button type="button" className='mt-3 btn btn-sm btn-success'><Link to={'/register'} className='nav-link' >Register Me</Link></button></p>
                                                                                <b>Get yourself registered today <span className='fs-4 mx-1'>.</span><span className='fs-5 mx-1'>.</span><span className='fs-6 mx-1'>o</span><span className='fs-5 mx-1'>.</span><span className='fs-4 mx-1'>.</span> </b>
                                                                            </Alert>
                                                                        </InnerContainer>
                                                                    ) : null}
                                                                </Container>
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

HeaderComponent.propTypes = {
    isAuthenticated: PropTypes.bool,
    setIsAuthenticated: PropTypes.func,
    dropdownStatus: PropTypes.bool,
    setDropdownStatus: PropTypes.func,
};

export default HeaderComponent;
