

const Hashtags = () => {
  return (
    <div className="px-6 py-3 mt-3">
      <div className="flex justify-between">
        <div className="flex gap-1 items-center ">
          <h3 className="text-cyan-400 font-semibold text-xl">Trending</h3>
          <span className="material-symbols-sharp text-cyan-400">
            moving
          </span>
        </div>
        <h3 className="text-cyan-400 font-semibold text-xl">Views</h3>
      </div>
      <div className="flex justify-between my-3">
        <div className="flex flex-col gap-1 ">
          <h3>#IamTheBest</h3>
        </div>
        <h3>1.1M</h3>
      </div>
      <div className="flex justify-between my-3">
        <div className="flex flex-col gap-1 ">
          <h3>{"#GunsN'Roses"}</h3>
        </div>
        <h3>2.2M</h3>
      </div>
      <div className="flex justify-between my-3">
        <div className="flex flex-col gap-1 ">
          <h3>#Lentejas</h3>
        </div>
        <h3>3.3M</h3>
      </div>
    </div>
  );
}

export default Hashtags;
