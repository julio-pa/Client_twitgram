/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import AccountCard from './AccountCard';
import { load_users_list } from '../../redux/actions/users/auth'
import { connect } from 'react-redux';
import { useEffect } from 'react';

const WhoFollow = ({ load_users_list, usersList }) => {
  useEffect(() => {
    load_users_list()
  }, [])
  return (
    <div className=" w-80  fixed z-10 right-0 top-0  bg-transparent overflow-x-hidden border border-gray-400 mx-6 mt-12 p-6 rounded-lg">
      <h3 className='text-xl font-bold mb-3'>Who to follow</h3>
      {usersList && usersList.map((data, index) => (
        <AccountCard index={index} data={data} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  usersList: state.auth.usersList
})

export default connect(mapStateToProps, {
  load_users_list
})(WhoFollow);
