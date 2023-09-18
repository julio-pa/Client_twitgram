import NavBar from "../../components/navigation/NavBar";
import Layout from "../../hocs/layouts/Layout";


const Bookmarks = () => {
  return (
    <Layout>
      <NavBar />
      <div className="w-full flex flex-col py-3 px-9 ml-72">
        Bookmarks📕
      </div>
    </Layout>
  );
}

export default Bookmarks;
