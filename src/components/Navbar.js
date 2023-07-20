import React from "react";
import "../App.css";

function Navbar({ onGetUsers }) {
  return (
    <div className="navbar">
      <div className="brandname">
        <p>AirData</p>
      </div>
      <div className="getusers-button">
        <button onClick={onGetUsers}>Get Users</button>
      </div>
    </div>
  );
}

export default Navbar;
