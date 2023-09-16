/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const SectionButton = ({ title, icon, link }) => {
  return (
    <NavLink to={link} className="flex gap-2 justify-start items-center mt-10 text-3xl font-semibold transition duration-300 ease-in-out hover:text-cyan-400" >
      <span className="material-symbols-sharp text-3xl">
        {icon}
      </span>
      {title}
    </NavLink>
  );
}

export default SectionButton;

