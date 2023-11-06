import "./Search.css";
import { useState } from "react";
import { Loader } from "./Homepage";
import images from "./images.jpeg";
import SearchResults from "../secondPage/SearchResult";
import { useNavigate } from "react-router-dom";

export default function SearchContainer() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer d3ecc9b38fe65156c11b07a08f3a29ed",
    },
  };

  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleCancel = () => {
    // Clear search results
    setSearchResults([]);
    setSearchInitiated(false);
    setIsSearching(false);
    setSearchInput("");
  };

  const handleSearch = async (query) => {
    setIsSearching(true);
    setSearchInitiated(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=d3ecc9b38fe65156c11b07a08f3a29ed`,
        options
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setTimeout(() => {
        setIsSearching(false);
      }, 2000);

      const data = await response.json();
      console.log(data);
      setSearchResults(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
    setSelectedMovieId(id);
  }

  return (
    <>
      <div className="search-container">
        <div className="left">
          <div className="icon-container">
            <ion-icon name="film-outline"></ion-icon>
          </div>
          <div style={{ width: "70px", marginLeft: "-40px" }}>
            <h3
              className="film-fusion"
              style={{
                margin: 0,
                marginLeft: "19px",
                marginBottom: "0",
                color: "white",
              }}
            >
              FilmFusion
            </h3>
          </div>
        </div>

        <Search
          handleSearch={handleSearch}
          setSearchInitiated={setSearchInitiated}
          setSearchInput={setSearchInput}
          searchInput={searchInput}
        />
        {isSearching && <Loader />}
        {searchInitiated && (
          <>
            <button onClick={() => handleSearch("spiderman")}>
              <ion-icon name="search-outline"></ion-icon>
            </button>
            <button
              className="cancel"
              style={{
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                backgroundColor: "red",
                position: "absolute",
                right: "150px",
                top: "40px",
                zIndex: "1px",
              }}
              onClick={handleCancel}
            >
              X
            </button>
          </>
        )}

        <div className="right">
          <div
            className="right-text"
            style={{ width: "100px", marginLeft: "10px" }}
          >
            <h3 className="sign-in">Sign in</h3>
          </div>
          <div className="icon-container1" style={{ marginLeft: "0px" }}>
            <ion-icon name="reorder-two-outline"></ion-icon>
          </div>
        </div>
      </div>
      <div className="underline"></div>
      <MovieList
        searchResults={searchResults}
        onSelectMovie={handleSelectMovie}
        selectedMovieId={selectedMovieId}
      />
    </>
  );
}

function Search({
  handleSearch,
  setSearchInitiated,
  searchInput,
  setSearchInput,
}) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="What do you want to watch?"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          handleSearch(e.target.value);
          setSearchInitiated(true);
        }
      }}
    />
  );
}
function MovieList({ searchResults, onSelectMovie, selectedMovieId }) {
  return (
    <div className="result-container">
      <ul className="list list-movies">
        {searchResults.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            overview={movie.overview}
            posterPath={movie.poster_path}
            onSelectMovie={onSelectMovie}
            isSelected={selectedMovieId === movie.id}
          />
        ))}
      </ul>
    </div>
  );
}

export function Movie({
  id,
  title,
  releaseDate,
  overview,
  posterPath,
  onSelectMovie,
  isSelected,
  selectedMovieId,
}) {
  const navigate = useNavigate();

  const handleMovieClick = (movieId) => {
    // Call the onSelectMovie function with the movie id
    onSelectMovie(id);
    navigate(`/trailer/${movieId}`);
  };

  return (
    <li className="cards" onClick={() => handleMovieClick(id)}>
      <img
        className="card-image"
        src={
          posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : images
        }
        alt={title}
      />

      <h3>{title}</h3>
      <div style={{ display: "flex" }}>
        <span style={{ fontSize: "10.4px" }}>Release Date:</span>
        <span style={{ fontSize: "10.4px" }}>{releaseDate}</span>
      </div>
      {isSelected && (
        <div style={{ display: "none" }}>
          <SearchResults selectedMovieId={id} />
        </div>
      )}
    </li>
  );
}
