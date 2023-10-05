/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../redux/actions/users/auth';

const SignUpForm = ({ signup, isAuthenticated }) => {

  const navigate = useNavigate()

  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    re_password: ''
  });

  const { username, email, password, re_password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (password === re_password) {
      signup(username, email, password, re_password);
      setAccountCreated(true);
    }
  };

  if (isAuthenticated) {
    return navigate('/home')
  }

  if (accountCreated) {
    return navigate('/login')
  }

  return (
    <div className=' w-3/4 p-3 flex flex-col justify-center gap-3 max-sm:w-full'>
      <form className="flex flex-col gap-3 " onSubmit={e => onSubmit(e)}>
        <label className="font-semibold text-lg">Username</label>
        <input name='username' type="text" maxLength="64" className="text-black rounded-full border-4 border-transparent p-1 outline-none focus:border-cyan-400" placeholder="Username" value={username}
          onChange={e => onChange(e)}
          required />
        <label className="font-semibold text-lg">Email</label>
        <input name='email' type="email" className="text-black rounded-full border-4 border-transparent p-1 outline-none focus:border-cyan-400" placeholder="Email" value={email}
          onChange={e => onChange(e)}
          required />
        <label className="font-semibold text-lg">Password</label>

        <input name='password' type="password" className="text-black rounded-full border-4 border-transparent p-1 outline-none focus:border-cyan-400" placeholder="Password" value={password}
          onChange={e => onChange(e)}
          required />
        <input name='re_password' type="password" className="text-black rounded-full border-4 border-transparent p-1 outline-none focus:border-cyan-400" placeholder="Repeat Password" value={re_password}
          onChange={e => onChange(e)}
          required />
        <button type="submit" className="bg-cyan-400 rounded-full p-3 font-semibold text-xl hover:bg-blue-400">Create Account</button>
      </form>
      <p className=" text-gray-400 text-xs">By registering, you agree to the Terms of Service and Privacy Policy, including the Use of Cookies policy.</p>
      <div className="text-2xl font-semibold">Already have an account?</div>
      <Link to='/login' className="bg-transparent border rounded-full px-60 py-4 font-semibold text-xl hover:bg-blue-400 max-sm:px-6 text-center">Sign in</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(SignUpForm);
