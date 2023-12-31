// import Layout from "../../hocs/layouts/Layout";
import logo from '../../assets/twitgram_logo.svg'
import LoginForm from "../../components/login/LoginForm";



const SignUp = () => {



  return (
    <div className="flex pr-6">
      <img className="w-3/4 text-red-500 max-md:hidden" src={logo} />
      <div className="w-full flex flex-col gap-3 justify-center max-md:pl-8">
        <h3 className="text-4xl font-bold py-6">Login</h3>
        <LoginForm />
      </div>
    </div>
  );
}

export default SignUp;
