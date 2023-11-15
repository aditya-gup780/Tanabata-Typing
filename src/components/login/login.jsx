import React from "react";
import {
  FaGoogle,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaUser,
  FaLock,
  FaEnvelope,
} from "react-icons/fa";
import Signup from "../signup/signup";
import "./login.css";
function Login1() {
  return (
    <div className="login1">
      {" "}
      <form action="" class="sign-in-form">
        <h2 className="title">Login</h2>
        <hr />
        <div className="input-field">
          <i className="fas fa-user">
            <FaUser />
          </i>
          <input type="text" placeholder="username" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock">
            <FaLock />
          </i>
          <input type="password" placeholder="password" />{" "}
        </div>

        <input type="submit" value="login" class="btn" />
        <p className="social-text">Or Sign In With Social Platform</p>
        <div className="social-media">
          <a href="#" className="social-icon">
            <i class="fab fa-facebook">
              {" "}
              <FaFacebook />
            </i>
          </a>
          <a href="#" className="social-icon">
            <i class="fab fa-google">
              <FaGoogle />
            </i>
          </a>
          <a href="#" className="social-icon">
            <i class="fab fa-twitter">
              <FaTwitter />{" "}
            </i>
          </a>
          <a href="#" className="social-icon">
            <i class="fab fa-linkedin-in">
              <FaLinkedin />
            </i>
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login1;
