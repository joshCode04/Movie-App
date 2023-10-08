import React, { useState } from "react";
import "./SignIn.css";

export default function SignIn() {
  const [checked, setChecked] = useState(false);
  const [clicked, setClicked] = useState(false);
  //   setChecked(!checked);
  return (
    <div className="form-box">
      {!clicked ? (
        <>
          <h2>Register or Login</h2>
          <div>
            <input className="input" type="text" placeholder="Your Email" />
          </div>
          <div>
            <input
              className="input"
              type={checked ? "text" : "password"}
              placeholder="Password"
            />
          </div>

          <div className="checkbox1">
            <input
              className="checkbox"
              type="checkbox"
              onClick={(e) => (e = setChecked(!checked))}
            />
            <label>Show password</label>
          </div>
          <button
            onClick={(e) => (e = setClicked(!clicked))}
            className="btn-login"
          >
            Login
          </button>
        </>
      ) : (
        <h2>You've Signed in</h2>
      )}
    </div>
  );
}
