import { Link } from 'react-router-dom';

const TweetButton = () => {
  return (
    <Link to='/tweetpost' className='mt-6 w-full flex justify-start items-center'>
      <button
        type="button"
        className="inline-flex items-center rounded-full border border-transparent bg-cyan-400 w-3/4 px-16 py-3 text-xl font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Tweet
      </button>
    </Link>
  );
}

export default TweetButton;
