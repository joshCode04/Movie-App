// SearchResults.js
import React from "react";
import "./SearchResult.css";
import Trailer from "./trailer.js";
import LogOut from "./logout.png";
import { useNavigate } from "react-router-dom";

function SearchResults({ selectedMovieId }) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(-1);
  };
  return (
    <div className="movie1">
      <div className="dashboard">
        <div
          className="go-back"
          onClick={handleButtonClick}
          style={{ display: "flex" }}
        >
          <ion-icon name="chevron-back-circle-outline"></ion-icon>

          <p style={{ margin: 0, paddingTop: "20px", height: "20px" }}>
            Go Back
          </p>
        </div>
        <div className="left">
          <div class="icon-container">
            <ion-icon name="film-outline"></ion-icon>
          </div>
          <h3 className="logo">FilmFusion</h3>
        </div>
        <div className="nav">
          <ul className="menu">
            <li className="nav-link">
              <span className="home">
                <ion-icon name="home"></ion-icon>
              </span>
              <span className="content">Home</span>
            </li>
            <li className="nav-link-active">
              <span className="home">
                <ion-icon name="videocam"></ion-icon>
              </span>
              <span className="content">Movies</span>
            </li>
            <li className="nav-link">
              <span className="home">
                <ion-icon name="tv"></ion-icon>
              </span>
              <span className="content">TV Series</span>
            </li>

            <li className="nav-link">
              <span className="home">
                <ion-icon name="arrow-up-circle"></ion-icon>
              </span>
              <span className="content">Upcoming</span>
            </li>
          </ul>
          <div className="ad-box">
            <p>Play movie quizes and earn free tickets</p>
            <p>50k people are playing now</p>
            <button className="playing">Start playing</button>
          </div>
          <ul>
            <li className="nav-link">
              <span>
                <img src={LogOut} alt="home" className="home" />
              </span>
              <span className="content">Log out</span>
            </li>
          </ul>
        </div>
      </div>
      <Trailer selectedMovieId={selectedMovieId} />
    </div>
  );
}

export default SearchResults;
