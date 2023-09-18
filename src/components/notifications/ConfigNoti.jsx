import { Link } from "react-router-dom";

const ConfigNoti = () => {
  return (
    <div className="h-50 w-72  fixed z-10 right-0 top-0  bg-transparent overflow-x-hidden border border-gray-400 mx-6 mt-8 p-6 rounded-lg">
      <h3 className="text-xl font-semibold">Manage your notifications</h3>
      <Link className="text-cyan-400 text-xl hover:border-b border-cyan-400">Settings</Link>
    </div>
  );
}

export default ConfigNoti;
