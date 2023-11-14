import React from 'react';
import Navbar from '../components/Navbar';
import SideList from '../components/SideList';
const TextArea = () => {
  return (
    <div class="textarea overflow-hidden">
      <Navbar />
      <div className='Text'>
        <SideList/>
        <div className="mb-3">
          <textarea data-bs-spy="scroll" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          <button type="button" id="reset" class="btn btn-primary">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default TextArea;