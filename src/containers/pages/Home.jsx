import NavBar from "../../components/navigation/NavBar";
import Layout from "../../hocs/layouts/Layout";
import Trends from "../../components/navigation/Trends";
import Search from "../../components/home/Search";
import Stories from "../../components/home/Stories";
import Posts from "../../components/home/Posts";


const Home = () => {
  return (
    <Layout>
      <NavBar />
      <div className="w-full flex flex-col py-3 px-9">
        <Search />
        <Stories />
        <Posts />
      </div>
      <Trends />
    </Layout>
  );
}

export default Home;
