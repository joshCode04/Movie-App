import img from "./trailer.jpeg";
import "./trailer.css";
import play from "./play.png";
import star from "./star.png";
import something from "./something.png";
import more from "./more.png";
import dropdown from "./dropdown.png";
import lastImage from "./last-image.jpeg";

export default function Trailer() {
  return (
    <div className="all">
      <div className="trailer-view">
        <img className="trailer-image" src={img} alt="trailer" />
        <div className="watch">
          <div className="round">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
            >
              <g filter="url(#filter0_bd_0_125)">
                <circle
                  cx="60"
                  cy="58"
                  r="55"
                  fill="white"
                  fill-opacity="0.35"
                  shape-rendering="crispEdges"
                />
                <circle
                  cx="60"
                  cy="58"
                  r="55"
                  stroke="#E8E8E8"
                  stroke-opacity="0.2"
                  stroke-width="2"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_bd_0_125"
                  x="0"
                  y="-2"
                  width="120"
                  height="122"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_0_125"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_backgroundBlur_0_125"
                    result="effect2_dropShadow_0_125"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_0_125"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <img className="play" src={play} alt="play" />
          </div>
        </div>
        <div className="movie-info">
          <div style={{ display: "flex" }}>
            <div className="content-header">
              <h3 className="title">
                Top Gun: Maverick • 2022 • PG-13 • 2h 10m
              </h3>
              <button className="action">Action</button>
              <button className="drama">Drama</button>

              <p>
                After thirty years, Maverick is still pushing the envelope as a
                top naval aviator, but must confront ghosts of his past when he
                leads TOP GUN's elite graduates on a mission that demands the
                ultimate sacrifice from those chosen to fly it.
              </p>
            </div>
            <div className="storyline">
              <img className="star" src={star} alt="star" />
              <h5 className="review">8.5 | 350k</h5>
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
              Director : <span className="red-content">Joseph Kosinski</span>
            </p>
            <p className="actors">
              Writers :{" "}
              <span className="red-content">
                Jim Cash, Jack Epps Jr, Peter Craig
              </span>
            </p>
            <p className="actors">
              Stars :{" "}
              <span className="red-content">
                Tom Cruise, Jennifer Connelly, Miles Teller
              </span>
            </p>
            <div className="last-div">
              <button className="last-btn">Top rated movie #65</button>
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
