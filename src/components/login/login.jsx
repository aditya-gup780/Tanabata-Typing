import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
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
  const history=useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
      e.preventDefault();

      try{

          await axios.post("http://localhost:5000/login",{
              email,password
          })
          .then(res=>{
              if(res.data=="exist"){
                  history("/",{state:{id:email}})
              }
              else if(res.data=="notexist"){
                  alert("User have not sign up")
              }
          })
          .catch(e=>{
              alert("wrong details")
              console.log(e);
          })

      }
      catch(e){
          console.log(e);

      }

  }

  return (
    <div className="login1">
      {" "}
      <form action="POST"  onSubmit={submit} class="sign-in-form">
        <h2 className="title">Login</h2>
        <hr />
        <div className="input-field">
          <i className="fas fa-user">
            <FaUser />
          </i>
          <input type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="email" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock">
            <FaLock />
          </i>
          <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="password" />{" "}
        </div>

        <input type="submit" value="login" class="btn"  />
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
