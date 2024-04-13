import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FeatureTestComponent = () => {
  const [ isAuthenticated, setIsAuthenticated ] = useState( false );
  const loginCheck = () => setIsAuthenticated( ( previousState ) => !previousState );
  const logout = () => {
    setIsAuthenticated( false );
  };
  return (
    <div>
      <h1 className="text-center h3">FeatureTestComponent</h1>
      {isAuthenticated ?
        <div className="container text-center p-2 m-2 mx-auto">
          <h1 className="text-muted h5">User Details</h1>
          <Link to={'/'}>
            <button className="btn btn-danger p-2 m-2" onClick={logout}>Logout</button>
          </Link>
        </div>
        :
        <div className="container text-center p-2 m-2 mx-auto">
          <h1 className="h5 text-center text-danger">Login before use.</h1>
          <div className='text-center'>
            <button className="btn btn-success p-2 m-2" onClick={loginCheck}>Login</button>
          </div>
        </div>
      }
    </div>
  );
};

export default FeatureTestComponent;