import Avatar from "../home/Avatar";


const PostCard = () => {
  return (
    <div className='border border-gray-400 rounded-lg px-3 py-3 my-3'>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar />
          <h3>Frank Black</h3>
        </div>
        <span className="material-symbols-sharp">
          more_horiz
        </span>
      </div>
      <div className="my-3 flex flex-col justify-center items-center md:px-14">
        <div className="my-3" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <img src="https://th.bing.com/th/id/OIP.4F0j9TOEdVKB_bfu8wU_-QHaFj?pid=ImgDet&rs=1" className="h-80 w-full object-contain" />
      </div>
      <div className="flex justify-between md:px-14 my-6">
        <span className="material-symbols-sharp cursor-pointer">
          chat
        </span>
        <span className="material-symbols-sharp cursor-pointer">
          autorenew
        </span>
        <span className="material-symbols-sharp cursor-pointer">
          favorite
        </span>
        <span className="material-symbols-sharp cursor-pointer">
          bookmark
        </span>
      </div>
    </div>
  );
}

export default PostCard;
