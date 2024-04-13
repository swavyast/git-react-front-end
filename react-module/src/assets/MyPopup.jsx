import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import PropTypes from 'prop-types';

function MyPopup({popup, setPopup}) {
    console.log('MyPopup called...')
  return (
    <div>
    <h4>Popup - GeeksforGeeks</h4>
    <Popup trigger= {popup}
        position="right center">
        <div>GeeksforGeeks</div>
        <button>Click here</button>
    </Popup>
</div>
  )
}

MyPopup.propTypes = {
    popup : PropTypes.bool,
    setPopup : PropTypes.func
};
export default MyPopup