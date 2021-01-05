import React from "react";
import SignInScreen from '../../components/Authentication/authentication'
import "./landingPage.css";

const Landing = (props) => {
  const setSignedIn = (isSignedIn) => {
    props.setSignedIn(isSignedIn);
  }
  return (
    <div className="landing-container">
      <div className="landing left"></div>
      <div className="landing right">
        <h4 className="right-title">Login</h4>
        <div className="row right-form">
          <form className="col s12">
            <div className="row">
              <div class="input-field col s12">
              <SignInScreen setSignedIn={setSignedIn}/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Landing;
