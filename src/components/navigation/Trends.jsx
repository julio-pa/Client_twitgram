import Hashtags from "../trends/Hashtags";
import UserAccount from "../trends/UserAccount";

const Trends = () => {
  return (
    <div className="w-1/3">
      <UserAccount />
      <Hashtags />
    </div>
  );
}

export default Trends;
