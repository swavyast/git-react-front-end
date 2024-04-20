import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/esm/Badge';
import ErrorBoundary from '../class-components/ErrorBoundary'

function NewHome ( { dropdownStatus, setDropdownStatus } ) {
  return <ErrorBoundary>
    <div className='fixed-top mt-5 mb-5 position-fixed' style={{zIndex:'100'}}>
      {(dropdownStatus) ? null : <Badge className="mt-3 fs-6 bg-dark align-center"  style={{zIndex:'55'}}>Welcome to GitManager</Badge>}
      <h1 className="text-center">hey Himanshu</h1>
      <h1 className="text-center">hey Himanshu</h1>
      <h1 className="text-center">hey Himanshu</h1>
      <h1 className="text-center">hey Himanshu</h1>
      <h1 className="text-center">hey Himanshu</h1>
      <h1 className="text-center">hey Himanshu</h1>
      <h1 className="text-center">hey Himanshu</h1>
    </div>
  </ErrorBoundary>;
}

NewHome.propTypes = {
  dropdownStatus: PropTypes.bool,
  setDropdownStatus: PropTypes.func
};
export default NewHome;