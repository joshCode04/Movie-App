import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import imdb from "./imdb.png";
import tomato from "./tomato.jpeg";
export default function HomepageContent() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the "searchInput" route
    navigate("/searchInput");
  };
  return (
    <>
      <div className="main-content-container">
        <div className="title">
          <h1
            style={{ fontSize: "50px", marginBottom: "15px", color: "white" }}
          >
            John Wick 3: Parabellum
          </h1>
        </div>
        <div className="ratings">
          <div className="first">
            <img className="imdb" src={imdb} alt="imdb" />
            <p style={{ margin: 0 }}>86.0/100</p>
          </div>
          <div className="second">
            <img className="tomato" src={tomato} alt={tomato} />
            <p style={{ margin: 0 }}>90%</p>
          </div>
        </div>
        <p
          className="details"
          style={{ fontFamily: "calibri", fontWeight: "bold" }}
        >
          John Wick is a retired assassin who returns back to his old ways after
          a group of Russian gangsters steal his car and kill a puppy which was
          gifted to him by his late wife Helen. The film was developed in 2012,
          where principal photography began September 25, 2013 and wrapped on
          December 20, 2013.
        </p>
        <button className="trailer-button" onClick={handleButtonClick}>
          <span className="trailer-icon">
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
                d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
                fill="white"
              />
            </svg>
          </span>
          Wacth Trailer
        </button>
      </div>
    </>
  );
}
