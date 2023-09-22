import LoginForm from "../../components/login/LoginForm";
import Layout from "../../hocs/layouts/Layout";
import logo from '../../assets/twitgram_logo.svg'

const Login = () => {
  return (
    <Layout>
      <img className="w-2/4 text-red-500" src={logo} />
      <div className="w-full flex flex-col gap-3 justify-center">
        <h3 className="text-7xl font-bold ">{"What's happenning"} <br />now</h3>
        <h3 className="text-4xl font-bold py-6">Join Today</h3>
        <LoginForm />
      </div>
    </Layout>
  );
}

export default Login;
