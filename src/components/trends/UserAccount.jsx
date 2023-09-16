import Avatar from "../home/Avatar";

const UserAccount = () => {
  return (
    <div className="flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <Avatar />
        <h3>Frank Black</h3>
      </div>
      <span className="material-symbols-sharp">
        settings
      </span>
    </div>
  );
}

export default UserAccount;
