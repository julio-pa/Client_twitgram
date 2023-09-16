import avatar from '../../assets/react.svg'

const Avatar = () => {
  return (
    <div className='mt-3'>
      <img className="inline-block h-12 w-12 rounded-full ring-2 object-contain ring-blue-400" src={avatar} alt="avatar" />
    </div>
  );
}

export default Avatar;
