import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutView from "./components/About";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView";
import Error404 from "./components/Error404";
function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Replace with your Authorization token",
      },
    };
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchText}`,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResult(data.results);
        });
    }
  }, [searchText]);

  return (
    <Router>
      <NavBar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={<SearchView keyword={searchText} result={searchResult} />}
        />
        <Route path="/movie/:id" element={<MovieView />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
