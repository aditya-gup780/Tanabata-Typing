import React, { useState, useRef } from "react";
import "./loginsignup.css";
import vector1 from "../../components/images/vector1.png";
import vector2 from "../../components/images/vector1.png";
import Login1 from "../../components/login/login";
import Signup from "../../components/signup/signup";
function Loginsignup() {
  const [login, setlogin] = useState(true);
  const Loginsignupcontainerref = useRef(null);

  const handleClick = () => {
    setlogin(!login);
    Loginsignupcontainerref.current.classList.toggle("active");
  };

  return (
    <div className="back">
      <div className="loginsignupcontainer" ref={Loginsignupcontainerref}>
        <div className="login1">
          <Login1 />
        </div>
        <div className="sidediv">
          <div className="heading">
            {login ? <h3>New To This Site??</h3> : <h3>Already a Member??</h3>}
          </div>
          <button type="button" class="btn" onClick={handleClick}>
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
