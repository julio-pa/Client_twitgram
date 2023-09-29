import NavBar from "../../components/navigation/NavBar";
import PostForm from "../../components/posts/PostForm";
import Layout from "../../hocs/layouts/Layout";


const TweetPost = () => {
  return (
    <Layout>
      <NavBar />
      <div className="w-full flex flex-col py-3 px-9 ml-72">
        <h3 className="text-4xl font-bold mb-10 border-b-2 pb-3 border-cyan-400">Create Post</h3>
        <PostForm />
      </div>
    </Layout>
  );
}

export default TweetPost;
