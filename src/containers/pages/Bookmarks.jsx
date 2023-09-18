import Posts from "../../components/home/Posts";
import NavBar from "../../components/navigation/NavBar";
import FilterButtom from "../../components/notifications/FilterButtom";
import Layout from "../../hocs/layouts/Layout";


const Bookmarks = () => {
  return (
    <Layout>
      <NavBar />
      <div className="w-full flex flex-col py-3 px-9 ml-72 mr-80 ">
        <div className="flex gap-2 pb-3">
          <FilterButtom title='All' />
          <FilterButtom title='Food' />
          <FilterButtom title='News' />
        </div>
        <Posts />
      </div>
    </Layout>
  );
}

export default Bookmarks;
