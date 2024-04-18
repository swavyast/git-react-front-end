import React, { useNavigate } from 'react';
import PropTypes from 'prop-types';

function NavigationHook () {

  const navigate = useNavigate();

  return <ErrorBoundary navigate={navigate} />;
}

class ErrorBoundary extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = { hasError: false };
  }
  static getDerivedStateFromError ( error ) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch ( error, errorInfo ) {
    // You can log the error to an error reporting service
    console.error( 'Error caught by boundary:', error, errorInfo );
  }
  render () {
    const { hasError } = this.state;
    const parentElement = document.getElementsByTagName('html')[0];
    console.log('parentElement : ' + parentElement.tagName);
    
    // Render fallback UI
    return <div>
      {hasError ? parentElement.classList.add('errors') : parentElement.classList.remove('errors')}
      {!hasError ? parentElement.classList.add('defaultbg') : parentElement.classList.remove('defaultbg')}
      {hasError ? ( <div className='text-danger text-center pt-5'>
        <h1>Something went wrong.</h1>
      </div> ) : ( this.props.children )}
    </div>;
  }
}

ErrorBoundary.propTypes = {
  children : PropTypes.any
};

export default ErrorBoundary;
