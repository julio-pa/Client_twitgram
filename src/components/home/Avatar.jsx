import { Link } from 'react-router-dom';
import avatar from '../../assets/user-icon.webp'

const Avatar = ({ perfil }) => {
  return (
    <div className='mt-3'>
      <Link>
        <img className="inline-block h-12 w-12 rounded-full ring-2 object-fill ring-blue-400" src={perfil ? perfil : avatar} alt="avatar" />
      </Link>
    </div>
  );
}

export default Avatar;
