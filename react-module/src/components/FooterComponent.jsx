import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function NavigatorHook () {
    const navigate = useNavigate();
    const [ isAuthenticated, setIsAuthenticated ] = useState( false );
    // console.log(this.props.navigate);

    return <FooterComponent navigate={navigate} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />;
}

class FooterComponent extends React.Component {
    constructor ( props ) {
        super( props );
        this.state = {};
    }

    render () {
        return (
            <div>
                <p className="text-center text-muted">&copy;marketListing</p>
            </div>
        );
    }
}

FooterComponent.propTypes = {};

export default NavigatorHook;
