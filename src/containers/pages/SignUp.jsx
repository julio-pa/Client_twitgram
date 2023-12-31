import SignUpForm from "../../components/signup/SignUpForm";
// import Layout from "../../hocs/layouts/Layout";
import logo from '../../assets/twitgram_logo.svg'



const SignUp = () => {



  return (
    <div className="flex pr-6">
      <img className="w-3/4 text-red-500 max-md:hidden" src={logo} />
      <div className="w-full flex flex-col gap-3 justify-center max-md:pl-8">
        <h3 className="text-7xl font-bold max-sm:text-6xl">{"What's happenning"} <br />now</h3>
        <h3 className="text-4xl font-bold py-6">Join Today</h3>
        <SignUpForm />

      </div>
    </div>
  );
}

export default SignUp;
