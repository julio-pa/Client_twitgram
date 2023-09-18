import Layout from '../../hocs/layouts/Layout';
import NavBar from '../../components/navigation/NavBar';

const Profile = () => {
  return (
    <Layout>
      <NavBar />
      <div className="w-full flex flex-col py-3 px-9 ml-72">
        Profile😆
      </div>
    </Layout>
  );
}

export default Profile;
