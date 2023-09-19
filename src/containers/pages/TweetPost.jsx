import NavBar from "../../components/navigation/NavBar";
import Layout from "../../hocs/layouts/Layout";


const TweetPost = () => {
  return (
    <Layout>
      <NavBar />
      <div className="w-full flex flex-col py-3 px-9 ml-72">
        <h3 className="text-4xl font-bold mb-10 border-b-2 pb-3 border-cyan-400">Create Post</h3>
        <h3 className="py-3 text-2xl font-bold">Description</h3>
        <textarea className="bg-transparent p-3 resize-none" placeholder="Write your description" autoFocus rows='5' maxLength='400' required></textarea>
        <h3 className="py-3 text-2xl font-bold">Image</h3>
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input type="file" className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-cyan-500
      hover:file:bg-violet-100
    "/>
        </label>
      </div>
    </Layout>
  );
}

export default TweetPost;
