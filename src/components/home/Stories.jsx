/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import Avatar from './Avatar';
import { load_users_list } from '../../redux/actions/users/auth'
import { useEffect } from 'react';

const Stories = ({ load_users_list, usersList }) => {
  useEffect(() => {
    load_users_list()
  }, [])

  return (
    <div className='flex gap-6 py-6'>
      {usersList && usersList.map((data, index) => (
        <div key={index} className='flex flex-col gap-1 items-center text-base'>
          <Avatar perfil={data.img_perfil} />
          <h3>{data.username}</h3>
        </div>
      ))}
    </div>
  );
}
const mapStateToProps = state => ({
  usersList: state.auth.usersList
})

export default connect(mapStateToProps, {
  load_users_list
})(Stories);
