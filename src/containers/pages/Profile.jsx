/* eslint-disable react/prop-types */
import NavBar from '../../components/navigation/NavBar';
import ProfileHeader from '../../components/profile/ProfileHeader';
import Banner from '../../components/profile/Banner';
import InfoProfile from '../../components/profile/InfoProfile';
import Layout from '../../hocs/layouts/Layout';
import DescPerfil from '../../components/profile/DescPerfil';
import Stats from '../../components/profile/Stats';
import SlidePosts from '../../components/profile/SlidePosts';
import Posts from '../../components/home/Posts';
import { connect } from 'react-redux';
import { load_perfil } from '../../redux/actions/users/auth';

const Profile = ({ perfil }) => {

  let options = { year: 'numeric', month: 'short', day: 'numeric' };
  const date = new Date(perfil?.joined)
    .toLocaleDateString('en', options)
    .replace(/ /g, '-')
    .replace('.', '')
    .replace(/-([a-z])/, function (x) { return '-' + x[1].toUpperCase() });

  return (
    <Layout>
      <NavBar />
      <div className="w-full min-h-screen flex flex-col py-3  ml-72 border-l border-gray-400 max-sm:mx-1">
        <ProfileHeader user={perfil?.username} counter='473' />
        <Banner banner={perfil?.banner} />
        <InfoProfile user={perfil?.username} accountname={perfil?.username} imgperfil={perfil?.img_perfil} />
        <DescPerfil desc={perfil?.bio} />
        <Stats date={date} following={perfil?.following} followers={perfil?.followers} />
        <SlidePosts />
        <Posts />
      </div>
    </Layout>
  );
}

const mapStateToProps = state => ({
  perfil: state.auth.perfil
});

export default connect(mapStateToProps, { load_perfil })(Profile);
