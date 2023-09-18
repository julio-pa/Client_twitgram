

const Stats = ({ date, following, followers }) => {
  return (
    <div className="ml-9">
      <div className="flex gap-1">
        <span className="material-symbols-sharp text-gray-400">
          calendar_month
        </span>
        <h3 className="text-gray-400 text-lg">joined {date}</h3>
      </div>
      <div className="flex gap-1 my-3 text-xl">
        <p><b>{following} </b>following</p>
        <p><b>{followers} </b> followers</p>
      </div>
    </div>
  );
}

export default Stats;
