
import { Link } from 'react-router-dom';

const FilterButtom = ({ title }) => {
  return (
    <Link className=' flex justify-start items-center'>
      <button
        type="button"
        className="inline-flex items-center rounded-full border border-gray-400 bg-transparent px-4 py-3 text-xl font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:bg-blue-500 "
      >
        {title}
      </button>
    </Link>
  );
}

export default FilterButtom;
