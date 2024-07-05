import Hero from "./Hero";
import { Link } from "react-router-dom";
import defaultPoster from "../poster-default.png";
import noResult from "../noresult.png";

// TMDB API KEY = bac74a8e4160840cd78aa2d3d5621af5
// TMDB API URL = https://api.themoviedb.org/3/search/movie

const MovieCard = ({ movie, length }) => {
  if (movie) {
    const posteUrl = movie.poster_path
      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
      : defaultPoster;
    const detailUrl = `/movie/${movie.id}`;
    return (
      <div
        className="card"
        style={{ width: "18rem", padding: 0, margin: "10px" }}
      >
        <img
          src={posteUrl}
          className="card-img-top"
          alt={movie.original_title}
          style={{ height: "250px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">
            Show Details
          </Link>
        </div>
      </div>
    );
  }
  if (length === 0) {
    return (
      <>
        <img
          src={noResult}
          alt="no-result"
          style={{ height: "340px", marginLeft: "30%" }}
        />
      </>
    );
  }
};

const SearchView = ({ keyword, result }) => {
  const resultHtml = result.map((obj, i) => {
    return <MovieCard key={i} movie={obj} />;
  });
  return (
    <>
      {keyword !== "" ? (
        <Hero
          text={`You are searching for the movie '${keyword.toUpperCase()}'...`}
        />
      ) : (
        <Hero text="You are not searching for any movie..." />
      )}
      <div className="container" style={{ marginLeft: "15%" }}>
        <div className="row">{resultHtml}</div>
      </div>
      <MovieCard length={result.length} />
    </>
  );
};

export default SearchView;
