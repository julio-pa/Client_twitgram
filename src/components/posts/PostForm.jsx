import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { post_tweet } from '../../redux/actions/tweets/tweets';



const PostForm = ({ post_tweet, TweetPost, user }) => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    // id_user: 4,
    description: '',
    thumbnail: null,
  });

  const { description, thumbnail } = formData;
  const id_user = user.id

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    post_tweet(id_user, description);

  };

  // if (TweetPost) {
  //   // return navigate('/home')
  //   alert('tweetpost')
  // }

  return (
    <form onSubmit={e => onSubmit(e)}>
      <h3 className="py-3 text-2xl font-bold">Description</h3>
      <textarea name='description' className="bg-transparent p-3 resize-none border border-gray-400 rounded-lg w-full" placeholder="Write your description" autoFocus rows='5' maxLength='400' value={description}
        onChange={e => onChange(e)}
        required ></textarea>
      <h3 className="py-3 text-2xl font-bold">Image</h3>
      <input name='thumbnail' type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-cyan-500 hover:file:bg-violet-100" value={thumbnail}
        onChange={e => onChange(e)} />
      <button
        type="submit"
        className="inline-flex items-center rounded-full border border-transparent bg-cyan-400 w-0.5/4 px-16 py-3 text-xl font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 my-6"
      >
        Post
      </button>
    </form>
  );
}
const mapStateToProps = state => ({
  TweetPost: state.tweets.TweetPost,
  user: state.auth.user,
});
export default connect(mapStateToProps, { post_tweet })(PostForm);
