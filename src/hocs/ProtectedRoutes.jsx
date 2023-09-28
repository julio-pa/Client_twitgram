import { connect } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { checkAuthenticated } from '../redux/actions/users/auth';

const ProtectedRoutes = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to='/signup' />
  } else {
    return <Outlet />
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { checkAuthenticated })(ProtectedRoutes);
