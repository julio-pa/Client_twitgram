

const Search = () => {
  return (
    <div className='my-3'>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <span className="material-symbols-sharp text-gray-400">
            search
          </span>
        </span>
        <input className="placeholder:italic placeholder:text-slate-400 block bg-transparent w-full border border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-white rounded-full" placeholder="Search" type="text" name="search" />
      </label>
    </div>
  );
}

export default Search;
