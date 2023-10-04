
import { Link } from 'react-router-dom';
import FilterButtom from '../notifications/FilterButtom';
import AvatarProfile from './AvatarProfile';

const InfoProfile = ({ user, accountname, imgperfil }) => {
  return (
    <div className='flex items-center justify-between ml-9'>
      <div className='flex flex-col'>
        <AvatarProfile perfil={imgperfil} />
        <div className='font-bold text-2xl mt-3'>
          {user}
        </div>
        <div className='text-gray-400 text-base'>
          @{accountname}
        </div>
      </div>

      <FilterButtom title='Edit' link='/settings' />
    </div>
  );
}

export default InfoProfile;
