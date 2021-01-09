import React from "react";
import SignInScreen from '../../components/Authentication/authentication'
import "./landingPage.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing left hide-on-med-and-down"></div>
      <SignInScreen></SignInScreen>
    </div>
  )
}

export default Landing;
