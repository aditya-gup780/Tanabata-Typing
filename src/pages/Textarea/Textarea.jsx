import React from "react";
import Navbar1 from "../../components/Navbar1/Navbar1";
import SideList from "../../components/sidelist/SideList";
import "./Textarea.css";
const TextArea = () => {
  return (
    <div class="textarea overflow-hidden">
      <Navbar1 />
      <div className="Text">
        <SideList />
        <div className="mb-3">
          <textarea
            data-bs-spy="scroll"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button type="button" id="reset" class="btn btn-primary">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
