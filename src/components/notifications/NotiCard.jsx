import { Link } from 'react-router-dom';
import Avatar from '../home/Avatar';

const NotiCard = ({ user, desc }) => {
  return (
    <Link className='flex items-center gap-4 my-3 border border-gray-400 p-3 rounded-lg'>
      <Avatar />
      <div className='text-lg'>
        <p className='font-semibold'>{user} published: </p>
        <p>{desc}</p>
      </div>
    </Link>
  );
}

export default NotiCard;
