import { React } from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-div">
      <div className="social-div">
        <span className="icon">
          <ion-icon name="logo-facebook"></ion-icon>
        </span>
        <span className="icon">
          <ion-icon name="logo-instagram"></ion-icon>
        </span>
        <span className="icon">
          <ion-icon name="logo-linkedin"></ion-icon>
        </span>
        <span className="icon">
          <ion-icon name="logo-youtube"></ion-icon>
        </span>
      </div>
      <div className="condition">
        <p className="conditions">Condition of Use</p>
        <p className="conditions">Privacy & Policy</p>
        <p className="conditions">Press Room</p>
      </div>
      <div className="copyright">
        <p>© 2023 MovieBox by Olumide Ayeromara</p>
      </div>
    </div>
  );
}
