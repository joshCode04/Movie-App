import React, { useEffect, useState } from "react";
import img from "./trailer.jpeg";
import "./trailer.css";
import play from "./play.png";
import star from "./star.png";
import something from "./something.png";
import more from "./more.png";
import dropdown from "./dropdown.png";
import lastImage from "./last-image.jpeg";
import { useParams } from "react-router-dom";
import Youtube from "react-youtube";

export default function Trailer() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2VjYzliMzhmZTY1MTU2YzExYjA3YTA4ZjNhMjllZCIsInN1YiI6IjY1MDA0NDJjZmZjOWRlMGVlM2M1ZDc4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K3FkBDQlRThV_YEw0WQ_17jdPNuAptkzU32vZnOxeXo",
  //   },
  // };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (movieId) {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=d3ecc9b38fe65156c11b07a08f3a29ed&append_to_response=videos`
          );

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          console.log(data);
          setMovieDetails(data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchMovieDetails();
  }, [movieId]); // Add movieId as a dependency

  const trailer = movieDetails?.videos?.results.find(
    (vid) => vid.name === "Official Trailer"
  );
  return (
    <div className="all">
      <div className="trailer-view">
        {movieDetails ? (
          <Youtube
            title="trailer"
            videoId={trailer?.key}
            containerClassname="trailer-video"
            opts={{
              width: "100%",
              height: "389px",
            }}
          />
        ) : (
          <img className="trailer-image" src={img} alt="trailer" />
        )}

        <div className="watch"></div>
        <div className="movie-info">
          <div style={{ display: "flex" }}>
            <div className="content-header">
              <h3 className="title">
                {movieDetails?.original_title || "Unknown title"} •{" "}
                {movieDetails?.release_date}
                {movieDetails?.adult === false ? "" : "• PG-13"}
              </h3>

              {movieDetails?.genres && (
                <>
                  <button className="action">
                    {movieDetails.genres[0]?.name}
                  </button>
                  <button className="drama">
                    {movieDetails.genres[1]?.name}
                  </button>
                </>
              )}

              <p>{movieDetails?.overview}</p>
            </div>
            <div className="storyline">
              <img className="star" src={star} alt="star" />
              <h5 className="review">
                {movieDetails?.vote_average} | {movieDetails?.vote_count} votes
              </h5>

              <button className="something-button">
                <span>
                  <img
                    className="btns-icon"
                    src={something}
                    alt="something"
                  ></img>
                </span>
                See Something
              </button>
              <button className="more-button">
                <span>
                  <img
                    style={{ color: "black" }}
                    className="btns-icon"
                    src={more}
                    alt="more"
                  ></img>
                </span>
                More watch options
              </button>
            </div>
          </div>

          <div className="writer">
            <p className="actors">
              Production Company :
              <span className="red-content">
                {movieDetails?.production_companies[0]?.name}
              </span>
            </p>
            <p className="actors">
              Production Company :
              <span className="red-content">
                {movieDetails?.production_companies[1]?.name}
              </span>
            </p>
            <p className="actors">
              Production Company :
              <span className="red-content">
                {movieDetails?.production_companies[2]?.name}
              </span>
            </p>
            <div className="last-div">
              <button className="last-btn">
                Vote Average : {movieDetails?.vote_average}
              </button>
              <p className="award">Awards 9 nominations</p>
              <img className="dropdown" src={dropdown} alt="dropdown" />
            </div>
          </div>
          <div className="last">
            <img className="last-image" src={lastImage} alt="lastimage" />
            <p className="best-movies-content">
              <span>
                <img
                  style={{
                    color: "black",
                    position: "relative",
                    top: "7px",
                    left: "7px",
                  }}
                  className="btns-icon"
                  src={more}
                  alt="more"
                ></img>
              </span>
              The Best Movies and Shows in September
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
