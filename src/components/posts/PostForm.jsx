/* eslint-disable react/prop-types */
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { post_tweet } from '../../redux/actions/tweets/tweets';




const PostForm = ({ post_tweet, user }) => {

  // const navigate = useNavigate()

  // const [errors, setErrors] = useState({
  //   user: "",
  //   description: "",
  //   thumbnail: "",
  // });

  const [formData, setFormData] = useState({
    user: user.id,
    description: '',
    thumbnail: null,
  });

  // const { description, thumbnail } = formData;
  // const id_user = user.id

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  // console.log(formData.description)

  const handleImageChange = (e) => {
    let newData = { ...formData };
    newData["thumbnail"] = e.target.files[0];
    setFormData(newData);
  };

  function createMyModelEntry(data) {
    let form_data = new FormData();
    if (data.thumbnail)
      form_data.append("thumbnail", data.thumbnail,
        data.thumbnail.name);
    form_data.append("user", data.user);
    form_data.append("description", data.description);
    return formData
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const final_data = await createMyModelEntry(formData)

    post_tweet(final_data)
    // navigate('/')

  };

  // if (TweetPost) {
  //   // return navigate('/home')
  //   alert('tweetpost')
  // }

  return (
    <form onSubmit={e => onSubmit(e)} encType='multipart/formdata'>
      <h3 className="py-3 text-2xl font-bold">Description</h3>
      <textarea name='description' className="bg-transparent p-3 resize-none border border-gray-400 rounded-lg w-full" placeholder="Write your description" autoFocus rows='5' maxLength='400'
        onChange={e => handleChange(e)}
        required ></textarea>
      <h3 className="py-3 text-2xl font-bold">Image</h3>
      <input name='thumbnail' type="file" accept='.png, .jpg, .jpeg' className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-cyan-500 hover:file:bg-violet-100"
        onChange={e => handleImageChange(e)} />
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
