import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./loginsignup.css";
import vector1 from "../../components/images/vector1.png";
import vector2 from "../../components/images/vector2.png";
import Login1 from "../../components/login/login";
import Signup from "../../components/signup/signup";
function Loginsignup() {
  const [login, setlogin] = useState(true);
  const Loginsignupcontainerref = useRef(null);
  const loginref = useRef(null);
  const handleClick = () => {
    setlogin(!login);
    Loginsignupcontainerref.current.classList.toggle("active");
    loginref.current.classList.toggle("active");
  };

  return (
    <div className="back">
      <button type="button" className="btn5">
        <Link to="/Tanabata-Typing" className="btn6">
          Back
        </Link>
      </button>
      <div className="loginsignupcontainer" ref={Loginsignupcontainerref}>
        <div className="login1" ref={loginref}>
          <Login1 />
        </div>
        <div className="sidediv">
          <div className="heading">
            {login ? <h3>New To This Site??</h3> : <h3>Already a Member??</h3>}
          </div>
          <button type="button" class="btn1" onClick={handleClick}>
            {login ? "Signup" : "Login"}
          </button>
          <div className="vector">
            {login ? (
              <img src={vector1} alt="Description of the image" class="image" />
            ) : (
              <img src={vector2} alt="Description of the image" class="image" />
            )}
          </div>
        </div>
        <div className="signup">
          <Signup />
        </div>
      </div>
    </div>
  );
}

export default Loginsignup;
