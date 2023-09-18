import Hashtags from "../trends/Hashtags";
import UserAccount from "../trends/UserAccount";

const Trends = () => {
  return (
    <div className="h-screen w-72  fixed z-10 right-0 top-0 pt-10 bg-transparent overflow-x-hidden">
      <UserAccount />
      <Hashtags />
    </div>
  );
}

export default Trends;
