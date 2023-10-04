/* eslint-disable react/prop-types */

import Avatar from '../home/Avatar';
import FilterButtom from '../notifications/FilterButtom';

const AccountCard = ({ data }) => {
  return (
    <div className="flex border-b border-gray-400 py-3 justify-between gap-1">
      <Avatar perfil={data.img_perfil} />
      <div className=' flex flex-col w-1/3'>
        <h3 className="text-xl font-semibold">{data.username}</h3>
        <h3 className="text-lg font-light text-gray-400">@{data.username}</h3>
      </div>
      <FilterButtom title='Follow' />
    </div>
  );
}

export default AccountCard;
