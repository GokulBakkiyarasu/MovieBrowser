import error_img from "../6325254-removebg-preview.png";
import Hero from "./Hero";

const Error404 = () => {
  return (
    <>
      <Hero text={"Page Not Found"} />
      <img
        src={error_img}
        alt="error404"
        style={{ marginLeft: "27%", height: "340px", width: "600px" }}
      />
    </>
  );
};

export default Error404;
