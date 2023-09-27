import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/users/auth';


const LoginForm = ({ login, isAuthenticated }) => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated) {
    return navigate('/home')
  }

  return (
    <div className=' w-3/4 p-3 flex flex-col justify-center gap-3'>
      <form className="flex flex-col gap-3 " onSubmit={e => onSubmit(e)}>
        <label className="font-semibold text-lg">Email</label>
        <input name='email' type="email" className="text-black rounded-full border-4 border-transparent p-1 outline-none focus:border-cyan-400" placeholder="Email" value={email}
          onChange={e => onChange(e)}
          required />
        <label className="font-semibold text-lg">Password</label>
        <input name='password' type="password" className="text-black rounded-full border-4 border-transparent p-1 outline-none focus:border-cyan-400" placeholder="Password" value={password}
          onChange={e => onChange(e)}
          required />
        <button type="submit" className="bg-cyan-400 rounded-full p-3 font-semibold text-xl hover:bg-blue-400">Login</button>
      </form>
    </div>
  );
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(LoginForm);
