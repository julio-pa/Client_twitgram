import { Link } from 'react-router-dom';
import logo from '../../assets/twitgram_logo.svg'
import SectionButton from '../navbar/SectionButton';
import { pages } from '../../mock/MockData';
import TweetButton from '../navbar/TweetButton';

const NavBar = () => {
  return (
    <div
      className='pl-12 flex flex-col items-start h-screen w-72  fixed z-10 left-0 top-0 pt-10 bg-transparent overflow-x-hidden max-sm:hidden'>
      <Link to='/' className='cursor-pointer'>
        <img src={logo} className='object-cover' />
      </Link>
      <div >
        {pages.map(({ name, icon, link }, index) => (
          <SectionButton key={index} title={name} icon={icon} link={link} />
        ))}
      </div>
      <TweetButton />
    </div>
  );
}

export default NavBar;
