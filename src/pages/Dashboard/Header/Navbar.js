import React from "react";
import "./Navbar.css";
import logo from "../../../Images/logo.png";
import { Typography } from "@mui/material";

const Navbar = () => {
  return (
    <div className="sidenav">
      <ul className="sidenav-list">
        <li className="sidenav-ite">
          <img src={logo} alt="" className="logo" />
        </li>
        <li className="sidenav-item">
          <Typography variant="h5">Home</Typography>
        </li>
        <li className="sidenav-item">
          <Typography variant="h5">App Features</Typography>
        </li>
        <li className="sidenav-item">
          <Typography variant="h5">About Us</Typography>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
