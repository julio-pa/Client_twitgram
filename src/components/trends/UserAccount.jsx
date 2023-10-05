/* eslint-disable react/prop-types */
import Avatar from "../home/Avatar";
import { connect } from 'react-redux';
import { load_perfil, logout } from '../../redux/actions/users/auth';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserAccount = ({ logout, user, perfil, load_perfil }) => {

  const navigate = useNavigate()


  const logout_user = () => {
    logout();
    navigate('/signup')
  };

  const getUsername = async () => {
    const Username = await user.username
    return load_perfil(Username)
  }

  useEffect(() => {
    getUsername()
  }, []);

  return (
    <div className="flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <Avatar perfil={perfil?.img_perfil} />
        <div>
          <h3 className="uppercase text-xl fo font-semibold">{user?.username}</h3>
          <h3 className="text-cyan-400 font-semibold cursor-pointer border-b border-transparent hover:border-white" onClick={logout_user}>Logout</h3>
        </div>
      </div>
      <span className="material-symbols-sharp cursor-pointer">
        settings
      </span>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user,
  perfil: state.auth.perfil
});

export default connect(mapStateToProps, { logout, load_perfil })(UserAccount);
