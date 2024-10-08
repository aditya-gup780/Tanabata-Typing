import React, {useRef, useState} from 'react';

const DisplayGameCode = ({gameID})=>{
  const copyToClipboard = e => {
    texInputRef.current.select();
    document.execCommand("copy");
    setCopySuccess(true);
  }
  const [copySuccess,setCopySuccess] = useState(false);
  const textInputRef = useRef(null);
  return (
    <div className="row my-3 text-center">
      <div className="col-sm"></div>
      <div className="col-sm-8">
        <h4>Send this code to your friends to join</h4>
        <div className="input-group mb-3">
          <input type="text" ref={textInputRef} value={gameID} readOnly className="form-control">
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" onclick={copyToClipboard} type="button">Copy Game Code</button>
          </div>
        </div>
        {copySuccess ? <div className="alert alert-success" role="alert">Successfully Copied Game Code</div> : null}
      </div>
      <div className="col-sm"></div>
    </div>
  )
}
