// SearchResults.js
import React from "react";
import "./SearchResult.css";
import Trailer from "./trailer.js";
import LogOut from "./logout.png";
import { useNavigate } from "react-router-dom";

function SearchResults() {
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
              <span>
                <img
                  src="https://s3-alpha-sig.figma.com/img/2f94/9df6/ed9963b21c7ed4fb4e2fd5643aed0a3c?Expires=1695600000&Signature=LUxXOU1mMBszVcAu-vyI6V6M9Yv3WcCK4oozFqhQEMUi3NLAHQW7V2ELtZSTL1hyL-gr06iTNAlI5XFKG-P0dqmCetigRBeFDlmEMF96~oC7rPEGylsVh7Zvif943RWn3gaWaP57gjd2pjmpDrf2w5Qd47FlvHzSGvu4Fx0sKLKTx~DiPO0ShOJ-rsrKkxzEDJIeQH4iuJfWqLQqnp2mvPeY4Y2Zm3o12ABd881P7auhYrnmBr3a4PLFf9Znc4X3qV5Dbzsx5yaFFmR5f9~tA8RumRMaibyIOnSi1aMKW7lDs4TPgWZaf9YTY8ZG64SAtJFbqQPfmNgMbZKWmbryJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="home"
                  className="home"
                />
              </span>
              <span className="content">Home</span>
            </li>
            <li className="nav-link-active">
              <span>
                <img
                  src="https://s3-alpha-sig.figma.com/img/2509/08d8/a213cb9d68960e4f0354a5f4f968f0ee?Expires=1695600000&Signature=TtkdXP1iI9RuW~bqFYhcG8BMnM503UWy86LYGNcVHOmxnr52nPDHwqztXbk3qZGNk7cafCruvyA7MlCGb0p-EpCSJ2oqKCuOZJQqdJag2~m2tGqgKQr42alKkv7~cRK8BE9wFtNt5Ti1SzUCh8qsY7dgYtIodLggYVr-rludvS2yTo~oYjPEGAsLVZ6xCac7E2z3HIJSZi9ikxBLz3MNoU-NIbivqcMUEQIpS9KJYkdUUib3gY1NxE2NXvqqNvLOHP8SuM5k1YMJnMYS8gR24pWcB1B1NZ~BmKQ4lFvDJ-OJCelsFi0NfaCzvG-O1~zAN6N4JL1r7EqC1id9K7F1Bw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                  className="home"
                />
              </span>
              <span className="content">Movies</span>
            </li>
            <li className="nav-link">
              <span>
                <img
                  src="https://s3-alpha-sig.figma.com/img/5033/e796/2438812835b11537bceecce8c44daed2?Expires=1695600000&Signature=l6i7qUALW7eJOhR3NKovrm6GM217SlXZega1d0YtvoBgszMqtbzCGcCZ8hS~Kj7KjSgh14r4IYxIPcO590MSItoWGkvGia39znjV6K9gcfmSRyduaat-TuBq7wksm-l1Om83gTTsLzWfE3jeWzFw6~coSpDCMFh-D18x0T~8fkgitMCkdM~8aLaLhgJM-7ai8TiSwa92UHS6WlBA4I~XvfrdxZRXuJHApQVteEoB2D9t1-aMo4lZy6NrL6AHqRGe7Yu9tXUpYojrkWrBVfY95u9n2cQu8X2oppf9gztXsM7nnfElC-~77fyYqeCk~sDnsTc7Yg8V6wr5Rzrw3LKoGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="home"
                  className="home"
                />
              </span>
              <span className="content">TV Series</span>
            </li>

            <li className="nav-link">
              <span>
                <img
                  src="https://s3-alpha-sig.figma.com/img/f622/61f4/fd6af5257333edc471896aa0d7630e6e?Expires=1695600000&Signature=ZwxkCSsf-PPqmys-JLlncTYRtZnvMbtBYqVwJv8Le~L5Y3Z6blaKaHk5BwB~JwlrmICYU9ZN83ynVXbV8spi9577Y3EjSskRweom5U~dbq7tGBEk1N1CVgnBiWLaEs0yb-Q3KlzDm04sKcMEHTvBWu-lLjmjtkt5l2IpcG3ogH6Ev~2bzb5h4Bg2wRgps4W3~gW6eYvO3U-CynSveSBE3iLt0MJn4IdNQI8uBjPcSu80qYvZV3lITa5LtE80ch5C-EuR1YencGvg2kAc~yut91OP~Rbl3eRvUV85Jm-yQZ87oXKSf8LIJNob1qXAOolg984lRyjegRViCGUun-iT-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="home"
                  className="home"
                />
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
      <Trailer />
    </div>
  );
}

export default SearchResults;
