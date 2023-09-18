import { Link } from 'react-router-dom';

const ProfileHeader = ({ user, counter }) => {


  window.onscroll = function () { scrollFunction() }

  function scrollFunction() {
    if (document.getElementById('header')) {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('header').classList.add('bg-white');
      } else {
        document.getElementById('header').classList.remove('bg-white');
      }
    }
  }

  return (
    <div id='header' className='flex items-center gap-3 ml-3 text-xl fixed h-14'>
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
