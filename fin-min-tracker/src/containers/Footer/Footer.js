import React from "react";

import sg_logo from "../../assets/sg_logo.png"
import beyond_logo from "../../assets/Muted Logo copy.png"
import "./Footer.css";


const Footer = () => {
  return (
    <div className="footer-container">
      <a target="_blanck" href="https://beyonddesignstudio.com" alt="beyond design studio"><img className="react-logo" src={beyond_logo} alt="Beyond Design" /></a>
      <a target="_blanck" href="https://sg.ashoka.edu.in" alt="student govt"><img className="sg_logo" src={sg_logo} alt="student govt" /></a>
    </div>
  )
}

export default Footer;
