/* eslint-disable react/prop-types */
import { useState } from "react";
import Avatar from "../home/Avatar";


const PostCard = ({
  data,
  index
}) => {



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

  let options = { year: 'numeric', month: 'short', day: 'numeric' };
  const date = new Date(data.published)
    .toLocaleDateString('en', options)
    .replace(/ /g, '-')
    .replace('.', '')
    .replace(/-([a-z])/, function (x) { return '-' + x[1].toUpperCase() });

  return (
    <div className='border border-gray-400 rounded-lg px-3 py-3 my-3'>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar perfil={data?.user?.img_perfil} />
          <h3 className="text-xl font-semibold">{data?.user.name}</h3>
          <h3 className="text-lg font-light text-gray-400">@{data?.user.username}</h3>
          <h3 className="text-lg font-light text-gray-400">{date}</h3>
        </div>
        <span className="material-symbols-sharp cursor-pointer">
          more_horiz
        </span>
      </div>
      <div className="my-3 flex flex-col justify-start md:px-14">
        <div className="my-3" >
          {data.description}
        </div>
        <div className="w-full">
          {data.thumbnail
            ? <img id={index} src={`${data?.thumbnail}`} className="h-80 w-full object-fill rounded-2xl cursor-pointer" />
            : null}
        </div>
      </div>
      <div className="flex justify-between md:px-14 my-6 border-t border-gray-400 pt-6">
        <PostButtom icon='chat' count='777' style={normalStyle} />
        <PostButtom icon='autorenew' count='777' style={normalStyle} />
        <PostButtom icon='favorite' count={data?.likes} style={stylesheart} turn={addLike} />
        <PostButtom icon='bookmark' count='777' style={stylesbook} turn={addbook} />
      </div>
    </div >
  );

}



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

