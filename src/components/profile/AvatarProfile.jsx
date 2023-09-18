
import { Link } from 'react-router-dom';

const AvatarProfile = () => {
  return (
    <div className='mt-3'>
      <Link>
        <img className="inline-block h-40 w-40 rounded-full ring-8 ring-white object-cover" src='https://th.bing.com/th/id/OIP.Wcs_mOr90-skrrFS4CVJCQHaEK?pid=ImgDet&rs=1' alt="avatar" />
      </Link>
    </div>
  );
}

export default AvatarProfile;
