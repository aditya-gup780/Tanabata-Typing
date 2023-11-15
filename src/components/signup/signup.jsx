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
import "./signup.css";
import Login1 from "../login/login";
function Signup() {
  return (
    <div className="Signup1">
      {" "}
      <form action="" class="sign-up-form">
        <h2 className="title">Sign Up</h2>

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
        <div className="input-field">
          <i className="fas fa-envelope">
            <FaEnvelope />
          </i>
          <input type="text" placeholder="Email" />{" "}
        </div>
        <input type="submit" value="Sign up" class="btn" />
        <p className="social-text">Or Sign Up With Social Platform</p>
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

export default Signup;
