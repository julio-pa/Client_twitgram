import { useState } from "react";
import Avatar from "../home/Avatar";


const PostCard = () => {

  const [like, setLike] = useState(false);
  const [styleLike, setStyleLike] = useState('');
  const [book, setBook] = useState(false);
  const [styleBook, setStyleBook] = useState('');

  const stylesheart = `cursor-pointer hover:text-red-500 ${styleLike}`
  const stylesbook = `cursor-pointer hover:text-yellow-500 ${styleBook}`
  const normalStyle = "cursor-pointer hover:text-cyan-400"

  const addLike = () => {
    setLike(!like)
    like
      ? setStyleLike('text-red-500')
      : setStyleLike('')
  }
  const addbook = () => {
    setBook(!book)
    book
      ? setStyleBook('text-yellow-500')
      : setStyleBook('')
  }

  return (
    <div className='border border-gray-400 rounded-lg px-3 py-3 my-3'>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar />
          <h3 className="text-xl font-semibold">Frank Black</h3>
        </div>
        <span className="material-symbols-sharp cursor-pointer">
          more_horiz
        </span>
      </div>
      <div className="my-3 flex flex-col justify-center items-center md:px-14">
        <div className="my-3" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div className="w-full">
          <img src="https://th.bing.com/th/id/OIP.4F0j9TOEdVKB_bfu8wU_-QHaFj?pid=ImgDet&rs=1" className="h-80 w-full object-fill rounded-2xl cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-between md:px-14 my-6 border-t border-gray-400 pt-6">
        <PostButtom icon='chat' count='777' style={normalStyle} />
        <PostButtom icon='autorenew' count='777' style={normalStyle} />
        <PostButtom icon='favorite' count='777' style={stylesheart} turn={addLike} />
        <PostButtom icon='bookmark' count='777' style={stylesbook} turn={addbook} />
      </div>
    </div >
  );

}

import React from 'react';

const PostButtom = ({ icon, count, style, turn }) => {
  return (
    <div className={`flex gap-2	items-center ${style}`} >
      <span onClick={turn} className="material-symbols-sharp">
        {icon}
      </span>
      <p>{count}</p>
    </div >
  );
}



export default PostCard;
