import "./Movie.css";
import imdb from "./imdb.png";
import tomato from "./tomato.jpeg";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const imgUrl = "https://image.tmdb.org/t/p/original";
  const navigate = useNavigate();

  const handleMovieClick = () => {
    navigate(`/trailer/${movie.id}`);
  };
  return (
    <>
      <div className="movie" onClick={handleMovieClick}>
        <div className="movie-choice">
          <p className="movie-type">{movie.media_type}</p>

          <span className="hearts">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
                fill="#D1D5DB"
              />
            </svg>
          </span>
        </div>
        <div>
          <img
            className="card"
            src={`${imgUrl}/${movie.backdrop_path}`}
            alt="img"
          />
        </div>
        <div style={{ color: "white", paddingBottom: "20px" }}>
          <span style={{ color: "#9ca3af" }}>
            {movie.origin_country ? movie.origin_country : "No Origin Country"}
          </span>
          <h3 style={{ color: "white" }}>{movie.title || movie.name}</h3>
          <div
            className="ratings"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div style={{ height: "10px", width: "10px", marginRight: "50px" }}>
              <img
                style={{
                  display: "block",
                  height: "15px",
                  width: "35px",
                  marginLeft: "-20px",
                  marginTop: "-2px",
                }}
                src={imdb}
                alt="imdb"
              />
            </div>
            <p
              style={{
                margin: 0,
                padding: 0,
                marginLeft: "40px",
                color: "white",
              }}
            >
              86.0/100
            </p>
            <div style={{ height: "10px", width: "10px", marginLeft: "10px" }}>
              <img
                style={{
                  display: "block",
                  height: "10px",
                  width: "10px",
                }}
                src={tomato}
                alt="tomato"
              />
            </div>
            <p style={{ margin: 0, color: "white" }}>90%</p>
          </div>
        </div>
      </div>
    </>
  );
}
