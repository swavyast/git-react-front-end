import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/esm/Badge';

function NewHome ({dropdownStatus, setDropdownStatus}) {
  console.log(dropdownStatus)
  return (
    <div className='fixed-top mt-5 mb-5'>
      {dropdownStatus ? null : <Badge className="mt-3 fs-6 bg-dark align-center">Welcome to GitManager</Badge>}
      <h1 className="text-center">hey Himanshu</h1>
      <h1 className="text-center">hey Himanshu</h1>
      <h1 className="text-center">hey Himanshu</h1>
      <h1 className="text-center">hey Himanshu</h1>
      <h1 className="text-center">hey Himanshu</h1>
      <h1 className="text-center">hey Himanshu</h1>
      <h1 className="text-center">hey Himanshu</h1>
    </div>
  );
}

NewHome.propTypes = {
  dropdownStatus: PropTypes.bool,
  setDropdownStatus: PropTypes.func
};
export default NewHome;