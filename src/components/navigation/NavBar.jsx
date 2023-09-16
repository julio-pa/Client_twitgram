import { Link } from 'react-router-dom';
import logo from '../../assets/twitgramlogo.png'
import SectionButton from '../navbar/SectionButton';
import { pages } from '../../mock/MockData';

const NavBar = () => {
  return (
    <div className='pl-12 flex flex-col items-start h-screen'>
      <img src={logo} className='object-cover' />
      <div >
        {pages.map(({ name, icon }, index) => (
          <SectionButton key={index} title={name} icon={icon} />
        ))}
      </div>
      <div className='mt-6 w-full flex justify-center items-center'>
        <button
          type="button"
          className="inline-flex items-center rounded-full border border-transparent bg-blue-400 w-full px-20 py-3 text-xl font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Link>tweet</Link>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
