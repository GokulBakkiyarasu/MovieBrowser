import { useState, useEffect } from "react";
import Hero from "./Hero";
import { useParams } from "react-router-dom";
import defaultPoster from "../poster-default.png";

const MovieView = () => {
  const { id } = useParams();

  const [movieDetail, setMovieDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWM3NGE4ZTQxNjA4NDBjZDc4YWEyZDNkNTYyMWFmNSIsIm5iZiI6MTcxOTQ5MzcwMy40MzY4MjYsInN1YiI6IjY2MzVlYmFkOTU5MGUzMDEyY2JjMGJjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UDkECQLIWQy6y6AZ9wmyvSgqnEOTWb-m59VANh5N5-g",
      },
    };
    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetail(data);
        setIsLoading(false);
      });
  });

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetail) {
      return <Hero text={movieDetail.original_title} backdrop={backdropUrl} />;
    }
  }
  const posterUrl = movieDetail.poster_path
    ? `https://image.tmdb.org/t/p/w300${movieDetail.poster_path}`
    : defaultPoster;
  const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`;
  return (
    <>
      {renderMovieDetails()}
      <div className="container">
        <div className="row">
          <div className="col-md-3 my-5">
            <img
              src={posterUrl}
              alt="Poster_Images"
              className="img-fluid shadow rounded"
            />
          </div>
          <div className="col-md-9 my-5">
            <h2>{movieDetail.original_title}</h2>
            <p className="lead">{movieDetail.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieView;
