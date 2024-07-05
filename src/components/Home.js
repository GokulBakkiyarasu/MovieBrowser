import Hero from "./Hero";
const Home = () => {
  return (
    <>
      <Hero text="Welcome to MovieBrowser" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Welcome to your ultimate movie browsing destination!** Our website
              offers an expansive library of films across various genres, from
              timeless classics to the latest blockbusters. With an
              easy-to-navigate interface, you can effortlessly search for
              movies, read detailed descriptions, watch trailers, and explore
              cast and crew information. Personalized recommendations and
              curated lists help you discover new favorites, while features like
              watchlists, ratings, and reviews keep you engaged. Dive into a
              world of cinema and find your next great watch with just a few
              clicks!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
