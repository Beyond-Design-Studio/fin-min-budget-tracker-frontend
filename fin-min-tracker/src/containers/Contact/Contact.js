import React from "react";
import "./Contact.css"

import sg_logo from "../../assets/sg_logo.png";


const members = [
  {
    name: "Arundhati Rajan",
    position: "Finance Minister",
    email: "arundhati.rajan_ug22@gmail.com"
  },
  {
    name: "Satvik Agarwal",
    position: "General Financial Advisor",
    email: "satvik.agarwal_ug22@gmail.com"
  },
  {
    name: "Tanish Bafna",
    position: "Finance Minister",
    email: "tanish.bafna_ug22@gmail.com"
  },
  {
    name: "Shreeyanshi Atharav",
    position: "Co-Head of Reimbursements",
    email: "shreeyanshi.atharav_ug22@gmail.com"
  },
  {
    name: "Varun Upamanyu",
    position: "Co-Head of Reimbursements",
    email: "varun.upamanyu_ug21@gmail.com"
  },
]

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="left-contact panel">
        <div className="left-title">
          <h5>Finance Ministry</h5>
          <p>finance.ministry@gmial.com</p>
        </div>

        <div className="left-members">
          {
            members.map(member => {
              return (
                <div className="members-member">
                  <h6>{member.name}</h6>
                  <p>{member.position}</p>
                  <p>{member.email}</p>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="right-contact panel">
        <div className="right-img-container">
          <img className="right-img" src={sg_logo} alt="sg logo" />
        </div>

        <div className="right-field">
          <h5 className="right-field-title">Contanct Us</h5>
          <div className="input-field">
            <input id="your_name" type="text" class="validate" />
            <label for="your_name">Kimi no na wa</label>
          </div>
          <div className="input-field">
            <input id="mail" type="text" class="validate" />
            <label for="mail">E-mail</label>
          </div>
          <div className="input-field">
            <textarea id="message" class="materialize-textarea"></textarea>
            <label for="message">Message / Query</label>
          </div>
        </div>
        <button className="submit-btn btn btn-large">Submit</button>
      </div>
    </div>
  )
}

export default Contact;
