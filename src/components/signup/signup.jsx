import React, { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

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
  const history=useNavigate();

  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Data to be sent:', { username, password, email });
      const response = await axios.post('http://localhost:5000/signup', {
        username,
        password,
        email,
      })
      if (response.data.email === 'exist') {
        alert('User already exists');
      } else {
        history('/', { state: { id: email } });
      }
    } catch (error) {
      alert('Error: Unable to sign up');
      console.error(error);
    } 
  };
  //Google signup
  const handleGoogleLoginSuccess = async (response) => {
    try {
      const { tokenId } = response;

      const backendResponse = await axios.post('http://localhost:5000/google-auth', {
        token: tokenId,
      });

      // Handle backend response as needed
      console.log(backendResponse.data);
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google login failed:', error);
  };


  return (
    <div className="Signup1">
      {" "}
      <form action="POST" onSubmit={handleSubmit} class="sign-up-form">
        <h2 className="title">Sign Up</h2>

        <div className="input-field">
          <i className="fas fa-user">
            <FaUser />
          </i>
          <input type="text" onChange={(e) => { setUsername(e.target.value) }} placeholder="username" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock">
            <FaLock />
          </i>
          <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="password" />{" "}
        </div>
        <div className="input-field">
          <i className="fas fa-envelope">
            <FaEnvelope />
          </i>
          <input type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />{" "}
        </div>
        <input type="submit" value="Sign up" class="btn2"  />
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
              <FaGoogle onClick={handleGoogleLoginSuccess} />
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
