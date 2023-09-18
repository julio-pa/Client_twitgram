import NavBar from '../../components/navigation/NavBar';
import ProfileHeader from '../../components/profile/ProfileHeader';
import Banner from '../../components/profile/Banner';
import InfoProfile from '../../components/profile/InfoProfile';
import Layout from '../../hocs/layouts/Layout';
import DescPerfil from '../../components/profile/DescPerfil';
import Stats from '../../components/profile/Stats';
import SlidePosts from '../../components/profile/SlidePosts';
import Posts from '../../components/home/Posts';

const Profile = () => {
  return (
    <Layout>
      <NavBar />
      <div className="w-full min-h-screen flex flex-col py-3  ml-72 border-l border-gray-400">
        <ProfileHeader user='FrankBlack' counter='473' />
        <Banner />
        <InfoProfile user='FrankBlack' accountname='frankxxx' />
        <DescPerfil desc='¡Bienvenidos al canal Oficial de PlayStation para Latinoamérica! En nuestro canal, encontrarás entrevistas, tráilers, contenido exclusivo y lo último de nuestros juegos y consolas. ' />
        <Stats date='07 July 1982' following='7' followers='10M' />
        <SlidePosts />
        <Posts />
      </div>
    </Layout>
  );
}

export default Profile;
