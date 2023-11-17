import React from "react";

export default function Navbar2() {
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
              Contest
            </button>
            <button
              id="register"
              className="btn3 btn-outline-light"
              type="submit"
            >
              Friends
            </button>
            <button id="login" className="btn3 btn-outline-light" type="submit">
              Score
            </button>
            <button className="btn4" type="submit">
              {" "}
              <img src="data:image/png;base64,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" />{" "}
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
