import React from "react";
import "./Navbar1.css";
import { Link } from "react-router-dom";
export default function Navbar1() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" id="navbar1">
      <div className="container-fluid">
        <div className="nav">
          <a className="navbar-brand" href="#">
            Tanabata's Typing Zone
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <button id="practice" className="btn3" type="submit">
              <Link to="/dashboard" className="btn3">
                {" "}
                Practice Now!
              </Link>
            </button>
            <button
              id="register"
              className="btn3 btn-outline-light"
              type="submit"
            >
              <Link to="/Loginsignup" className="btn3">
                Register/Login
              </Link>
            </button>
            <button id="login" className="btn3 btn-outline-light" type="submit">
              <Link to="/textarea" className="btn3">
                TextArea
              </Link>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
