import avatar from '../../assets/user-icon.webp'
import { Link } from 'react-router-dom';

const AvatarProfile = ({ perfil }) => {
  return (
    <div className='mt-3'>
      <Link>
        <img className="inline-block h-40 w-40 rounded-full ring-8 ring-white object-cover" src={perfil ? perfil : avatar} alt="avatar" />
      </Link>
    </div>
  );
}

export default AvatarProfile;
