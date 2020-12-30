import React from "react";
import SignInScreen from '../../components/Authentication/authentication'
import "./landingPage.css";


const Landing = () => {

  return (
    <div className="landing-container">
      <div className="landing left"></div>
      <div className="landing right">
        <h4 className="right-title">Login</h4>
        {
          // <form>
          // <input type="email" id="email" />
          // <input type="password" id="password" />
          // </form>
        }
        <div className="row right-form">
          <form className="col s12">
            <div className="row">
              <div class="input-field col s12">
              <SignInScreen/>

              </div>
            </div>
            {/* <div className="row">
              <div class="input-field col s12">
                <input id="password" type="password" class="validate" />
                <label for="password">Password</label>
              </div>
            </div> */}
            {/* <button className="waves-effect waves-light btn-large">Submit</button> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Landing;
