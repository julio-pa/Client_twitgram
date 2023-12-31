
const SlidePosts = () => {
  return (
    <div className='flex gap-3 max-sm:gap-1'>
      <SlideButtom title='Tweets' />
      <SlideButtom title='Tweets & replies' />
      <SlideButtom title='Media' />
    </div>
  );
}


const SlideButtom = ({ title }) => {
  return (
    <button className=" text-2xl font-bold px-9 transition duration-300 ease-in-out hover:text-cyan-400 border-b-4 border-transparent hover:border-cyan-400 focus:text-cyan-400 max-sm:text-base max-sm:mx-0">{title}</button>
  );
}




export default SlidePosts;
