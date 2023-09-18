import Posts from "../../components/home/Posts";
import NavBar from "../../components/navigation/NavBar";
import Layout from "../../hocs/layouts/Layout";


const ForYou = () => {
  return (
    <Layout>
      <NavBar />
      <div className="w-full flex flex-col py-3 px-9 ml-72">
        <Posts />
      </div>
    </Layout>
  );
}

export default ForYou;
