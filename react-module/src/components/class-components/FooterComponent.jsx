import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from './ErrorBoundary';

class FooterComponent extends React.Component {
    constructor ( props ) {
        super( props );
        this.state = {};
    }

    render () {
        return <ErrorBoundary>
            <div className='mt-5 fixed-bottom'>
                <p className="text-center text-muted">&copy;marketListing</p>
            </div>
        </ErrorBoundary>;
    }
}

FooterComponent.propTypes = {};

export default FooterComponent;
