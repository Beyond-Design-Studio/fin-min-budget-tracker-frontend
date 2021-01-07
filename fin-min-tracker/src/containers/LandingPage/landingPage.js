import React from "react";
import SignInScreen from '../../components/Authentication/authentication'
import "./landingPage.css";

const Landing = (props) => {
  return (
    <div className="landing-container">
      <div className="landing left hide-on-med-and-down"></div>

      <div className="landing right">
        <h3 className="right-title">LOGIN</h3>

        <div className="right-form">
          <div className="rowww">
            <div className="sign-btn">
              <SignInScreen />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;
