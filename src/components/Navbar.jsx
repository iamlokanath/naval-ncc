import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="gceknav">
        <div className="gceknav-container">
          

          <Link to="/" className="gcek-logo">
            <span>GCEK</span>NAVAL<span className="lokanathspan1">NCC</span>
          </Link>
        </div>
      </div>

      
    </>
  );
};

export default Navbar;
