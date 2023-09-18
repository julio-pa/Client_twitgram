import { Link } from 'react-router-dom';

const ProfileHeader = ({ user, counter }) => {


  return (
    <div id='header' className='flex items-center gap-3 text-xl fixed top-0 h-20 bg-gray-900 w-full pt-3 pl-6'>
      <Link to='/'>
        <span className="material-symbols-sharp text-cyan-400 text-4xl">
          arrow_back
        </span>
      </Link>
      <div className='flex flex-col'>
        <div className='font-bold text-2xl'>
          {user}
        </div>
        <div className='text-gray-400'>
          {counter} tweets
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
