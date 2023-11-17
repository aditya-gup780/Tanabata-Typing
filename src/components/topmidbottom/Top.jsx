import React from "react";
import "./Top.css";
import typing1 from "../images/typing1.jpeg";
export default function Top() {
  return (
    <div className="top">
      <div className="image1">
        <img src={typing1} className="show-on-scroll" />
      </div>
      <div className="text">
        <div className="Textbox">
          <h3>
            Learn tricks and hacks for faster typing with custom typing lessons
          </h3>
          <p>
            Preloaded lessons tested by experts and users made for a better user
            experience provide quality to your professional life.
          </p>
        </div>
      </div>
    </div>
  );
}
