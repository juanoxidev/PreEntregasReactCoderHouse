import "./Loader.css";
// https://projects.lukehaas.me/css-loaders/
const Loader = () => {
  return (
    <>
      <img
        className="heroimg"
        src="https://i.ibb.co/JvBZTX6/logo.webp"
        alt="logo"
        width="400"
        height="500"
      />
      <div className="custom-loader"></div>;
    </>
  );
};

export default Loader;
