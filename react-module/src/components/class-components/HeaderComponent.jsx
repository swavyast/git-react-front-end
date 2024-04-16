import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHome, faAddressBook, faHandsHelping, faDownload, faInfoCircle, faPowerOff } from '../../index';
import ToggleButton from '../../assets/ToggleButton';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';

class HeaderComponent extends React.Component {
    constructor ( props ) {
        super( props );
        this.state = {
            showAlertStatus: false
        };
    }

    componentDidMount () {

    }

    render () {
        const { isAuthenticated, setIsAuthenticated } = this.props;
        const { dropdownStatus, setDropdownStatus } = this.props;
        return (
            <div className='p-0 m-0 bg-black position-fixed-top'>
                <nav className='p-0 m-0 position-relative' style={{ opacity: '0.8' }}>
                    <div className="d-inline-flex p-0 m-0">
                        <div className="p-2">
                            <ToggleButton dropdownStatus={dropdownStatus} setDropdownStatus={setDropdownStatus} />
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
                                <h3 className='text-center mb-0 text-white' style={{ marginTop: '14px' }}><Link to='/' className='nav-link pe-auto fs-5'><FontAwesomeIcon icon={faHome} /><Badge className='bg-dark d-block' style={{ fontSize: '10px' }}>Home</Badge></Link></h3>
                            </div>
                            <ul className='d-block bg-dark p-0' style={{ marginTop: '10px' }}>
                                {isAuthenticated ? (
                                    <li className='d-inline my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none fs-6' to={'/logout'}><FontAwesomeIcon icon={faPowerOff} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Logout</Link></li>
                                ) : (
                                    <li className='d-inline my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none fs-6' to={'/login'} onMouseOver={() => {
                                        this.setState( { showAlertStatus: true } ); setTimeout( () => {
                                            this.setState( { showAlertStatus: false } );
                                        }, 3000 );
                                    }} ><FontAwesomeIcon icon={faPowerOff} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Login</Link></li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                    {this.state.showAlertStatus ? (
                        <Alert variant="success">
                            <Alert.Heading>Hey, nice to see you</Alert.Heading>
                            <p>
                                Aww yeah, you successfully read this important alert message. This
                                example text is going to run a bit longer so that you can see how
                                spacing within an alert works with this kind of content.
                            </p>
                            <hr />
                            <p className="mb-0">
                                Whenever you need to, be sure to use margin utilities to keep things
                                nice and tidy.
                            </p>
                        </Alert>
                    ) : null}
                </div>
                {dropdownStatus ? (
                    <div className='pt-0 bg-dark' style={{ marginTop: '-15px', zIndex: '1000' }}>
                        <div className="d-flex bg-dark">
                            <ul className='d-block bg-dark' style={{ marginLeft: '14px', maxWidth: '90%', minHeight: '2rem' }}>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/'}><FontAwesomeIcon icon={faHome} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Home</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/About'}><FontAwesomeIcon icon={faInfoCircle} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> About</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Contact'}><FontAwesomeIcon icon={faAddressBook} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Contact</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Support'}><FontAwesomeIcon icon={faHandsHelping} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Support</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Downloads'}><FontAwesomeIcon icon={faDownload} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Downloads</Link></li>
                            </ul>
                            <ul className='d-block bg-dark' style={{ marginLeft: '14px', maxWidth: '90%', minHeight: '2rem' }}>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/'}><FontAwesomeIcon icon={faHome} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Home</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/About'}><FontAwesomeIcon icon={faInfoCircle} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> About</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Contact'}><FontAwesomeIcon icon={faAddressBook} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Contact</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Support'}><FontAwesomeIcon icon={faHandsHelping} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Support</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Downloads'}><FontAwesomeIcon icon={faDownload} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Downloads</Link></li>
                            </ul>
                            <ul className='d-block bg-dark' style={{ marginLeft: '14px', maxWidth: '90%', minHeight: '2rem' }}>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/'}><FontAwesomeIcon icon={faHome} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Home</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/About'}><FontAwesomeIcon icon={faInfoCircle} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> About</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Contact'}><FontAwesomeIcon icon={faAddressBook} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Contact</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Support'}><FontAwesomeIcon icon={faHandsHelping} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Support</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Downloads'}><FontAwesomeIcon icon={faDownload} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Downloads</Link></li>
                            </ul>
                            <ul className='d-block bg-dark' style={{ marginLeft: '14px', maxWidth: '90%', minHeight: '2rem' }}>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/'}><FontAwesomeIcon icon={faHome} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Home</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/About'}><FontAwesomeIcon icon={faInfoCircle} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> About</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Contact'}><FontAwesomeIcon icon={faAddressBook} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Contact</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Support'}><FontAwesomeIcon icon={faHandsHelping} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Support</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Downloads'}><FontAwesomeIcon icon={faDownload} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Downloads</Link></li>
                            </ul>
                            <ul className='d-block bg-dark' style={{ marginLeft: '14px', maxWidth: '90%', minHeight: '2rem' }}>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/'}><FontAwesomeIcon icon={faHome} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Home</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/About'}><FontAwesomeIcon icon={faInfoCircle} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> About</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Contact'}><FontAwesomeIcon icon={faAddressBook} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Contact</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Support'}><FontAwesomeIcon icon={faHandsHelping} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Support</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Downloads'}><FontAwesomeIcon icon={faDownload} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Downloads</Link></li>
                            </ul>
                            <ul className='d-block bg-dark' style={{ marginLeft: '14px', maxWidth: '90%', minHeight: '2rem' }}>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/'}><FontAwesomeIcon icon={faHome} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Home</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/About'}><FontAwesomeIcon icon={faInfoCircle} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> About</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Contact'}><FontAwesomeIcon icon={faAddressBook} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Contact</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Support'}><FontAwesomeIcon icon={faHandsHelping} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Support</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Downloads'}><FontAwesomeIcon icon={faDownload} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Downloads</Link></li>
                            </ul>
                            <ul className='d-block bg-dark' style={{ marginLeft: '14px', maxWidth: '90%', minHeight: '2rem' }}>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/'}><FontAwesomeIcon icon={faHome} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Home</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/About'}><FontAwesomeIcon icon={faInfoCircle} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> About</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Contact'}><FontAwesomeIcon icon={faAddressBook} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Contact</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Support'}><FontAwesomeIcon icon={faHandsHelping} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Support</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Downloads'}><FontAwesomeIcon icon={faDownload} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Downloads</Link></li>
                            </ul>
                            <ul className='d-block bg-dark' style={{ marginLeft: '14px', maxWidth: '90%', minHeight: '2rem' }}>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/'}><FontAwesomeIcon icon={faHome} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Home</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/About'}><FontAwesomeIcon icon={faInfoCircle} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> About</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Contact'}><FontAwesomeIcon icon={faAddressBook} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Contact</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Support'}><FontAwesomeIcon icon={faHandsHelping} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Support</Link></li>
                                <li className='p-2 my-auto py-auto'><Link className='btn btn-sm btn-dark text-light text-decoration-none' to={'/Downloads'}><FontAwesomeIcon icon={faDownload} style={{ maxHeight: '12px', paddingBottom: '2px' }} /> Downloads</Link></li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    null
                )}
            </div>
        );
    }
}

HeaderComponent.propTypes = {
    navigate: PropTypes.func,
    isAuthenticated: PropTypes.bool,
    setIsAuthenticated: PropTypes.func,
    dropdownStatus: PropTypes.bool,
    setDropdownStatus: PropTypes.func,
    popup: PropTypes.bool,
    setPopup: PropTypes.func
};

export default HeaderComponent;
