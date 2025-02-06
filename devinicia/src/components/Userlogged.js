import React from "react";
import "../styles/styles.css";

const Userlogged = () => {
  return(
    <div className="user">
       <img className="user-pic" src={`${process.env.PUBLIC_URL}/profiles/profile.png`} alt="user" />
       <h2>John Doe</h2>
    </div>
  );

};

export default Userlogged;