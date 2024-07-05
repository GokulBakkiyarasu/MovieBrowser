import Hero from "./Hero";
const AboutView = () => {
  return (
    <>
      <Hero text="About Us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Corrupti, excepturi labore delectus architecto unde expedita fuga
              ea minus eligendi, aliquam vero omnis dolorem, voluptate deserunt
              fugit numquam perferendis itaque eum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
