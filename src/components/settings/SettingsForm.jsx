import { useEffect, useState } from 'react';
import { update_profile, load_user } from '../../redux/actions/users/auth'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SettingsForm = ({ update_profile, user, load_user }) => {

  const navigate = useNavigate()

  useEffect(() => {
    load_user()
  }, [])

  const [formData, setFormData] = useState({
    id: user.id,
    img_perfil: null,
    banner: null,
    username: '',
    bio: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.files[0] });

  function createMyModelEntry(data) {
    let form_data = new FormData();
    if (data.img_perfil)
      form_data.append("img_perfil", data.img_perfil,
        data.img_perfil.name);

    if (data.banner)
      form_data.append("banner", data.banner,
        data.banner.name);
    form_data.append("username", data.username);
    form_data.append("bio", data.bio);
    form_data.append("id", data.id);
    return formData
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const final_data = await createMyModelEntry(formData)

    update_profile(final_data)
    navigate('/profile')

  };

  return (
    <div>
      <form className='flex flex-col gap-3' onSubmit={e => onSubmit(e)}>
        <h3 className="py-3 text-2xl font-bold">Profile Image</h3>
        <input name='img_perfil' type="file" accept='.png, .jpg, .jpeg' className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-cyan-500 hover:file:bg-violet-100" onChange={e => handleImageChange(e)}
        />
        <h3 className="py-3 text-2xl font-bold">Banner Image</h3>
        <input name='banner' type="file" accept='.png, .jpg, .jpeg' className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-cyan-500 hover:file:bg-violet-100" onChange={e => handleImageChange(e)}
        />
        <h3 className="py-3 text-2xl font-bold">Username</h3>
        <input name='username' type='text' className="bg-transparent p-3 resize-none border border-gray-400 rounded-lg w-2/4" maxLength="64" onChange={e => handleChange(e)} />
        <h3 className="py-3 text-2xl font-bold">Bio</h3>
        <input name='bio' type='text' className="bg-transparent p-3 resize-none border border-gray-400 rounded-lg w-2/4" maxLength="70" onChange={e => handleChange(e)} />
        <button
          type="submit"
          className="inline-flex items-center rounded-full border border-transparent bg-cyan-400 w-1/6 px-20 py-3 text-xl font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 my-6"
        >
          Save
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  perfil: state.auth.perfil,
  user: state.auth.user,
});

export default connect(mapStateToProps, { update_profile, load_user })(SettingsForm);
