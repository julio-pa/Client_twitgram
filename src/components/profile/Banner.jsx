import banerDefault from '../../assets/userbanner.jpg'

const Banner = ({ banner }) => {
  return (
    <div className="w-full py-3 -mb-24 pt-20">
      <img
        src={banner ? banner : banerDefault}
        className="w-full h-72 object-bottom" />
    </div>
  );
}

export default Banner;
