import Layout from '../../hocs/layouts/Layout';
import NavBar from '../../components/navigation/NavBar';
import NotiList from '../../components/notifications/NotiList';
import ConfigNoti from '../../components/notifications/ConfigNoti';

const Notifications = () => {
  return (
    <Layout>
      <NavBar />
      <div className="w-full flex flex-col py-3 px-9 ml-72 mr-80 max-sm:mx-1">
        <NotiList />
      </div>
      <ConfigNoti />
    </Layout>
  );
}

export default Notifications;
