import React from 'react';
import PropTypes from 'prop-types';

class UserDetailsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1 className="text-center">UserDetailsComponent</h1>
            </div>
        );
    }
}

UserDetailsComponent.propTypes = {};

export default UserDetailsComponent;
