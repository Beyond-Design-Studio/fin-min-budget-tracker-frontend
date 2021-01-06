import React, { useState } from "react";
import styles from "./CollapsedRow.module.css";
import { format } from 'date-fns'


const data = {
  "addedAt": 1606111913,
  "bundle": false,
  "category": "Intercollegiate Funds",
  "date": 1603584000,
  "description": "info info info",
  "details": "no6",
  "link": "www",
  "status": "Sent to OSL",
  "tags": "Biswamil",
  "total": 200,
  "type": "earnings"
}

const CollapseRow = (props) => {
  const [toggleClick, setToggleClick] = useState(false);
  console.log("qwertyuqwertyui", props)
  return (
    <tbody>
      <tr style={{ cursor: "pointer" }} className="collapse-head" onClick={() => setToggleClick(!toggleClick)}>
        <td>{toggleClick ? "▼" : "▶"}</td>
        <td>{props.dataVal ? props.dataVal.tags : data.tags}</td>
        <td>{props.dataVal ? props.dataVal.total : data.total}</td>
        <td>{props.dataVal ? props.dataVal.details : data.details}</td>
        <td>{props.dataVal ? props.dataVal.date : data.date}</td>
      </tr>
      {toggleClick &&
        <tr>
          <td colSpan="5">

            <div>
              <div className={styles.SecondModalDropTab}>
                <div className={styles.Title}>
                  <h5>Summary</h5>
                </div>
                <div className={styles.Content}>
                  <div className="mid-side">
                    <h5>Details</h5>
                    <p>{props.dataVal ? props.dataVal.details : data.details}</p>
                    <h5>Date</h5>
                    <p>{props.dataVal ? format(new Date(props.dataVal.date), 'dd/MM/yyyy') : data.date}</p>
                  </div>
                  <div className="right-side">
                    <h5>Description</h5>
                    <p>{props.dataVal ? props.dataVal.description : data.description}</p>
                    <h5>Total</h5>
                    <p>{props.dataVal ? props.dataVal.total : data.total}</p>
                  </div>
                </div>
              </div>

              <div className={styles.SecondModalDropTab}>
                <div className={styles.Title}>
                  <h5>General Info</h5>
                </div>
                <div className={styles.Content}>
                  <div className="mid-side-left">
                    <h5>Type</h5>
                    <p>{props.dataVal ? props.dataVal.type : data.type}</p>
                    <h5>Tag</h5>
                    <p>{props.dataVal ? props.dataVal.tags : data.tags}</p>
                  </div>
                  <div className="mid-side-right">
                    <h5>Added At</h5>
                    <p>{props.dataVal ? format(new Date(props.dataVal.addedAt), 'dd/MM/yyyy') : data.addedAt}</p>
                  </div>
                  <div className="right-side">
                    <h5>Category</h5>
                    <p>{props.dataVal ? props.dataVal.category : data.category}</p>
                    <h5>Bundle</h5>
                    <p>{props.dataVal.bundle ? 'Yes' : 'No'}</p>
                  </div>
                </div>
              </div>

              <div className={styles.SecondModalDropTab}>
                <div className={styles.Title}>
                  <h5>Track Transaction</h5>
                </div>
                <div className={styles.Content}>
                  <div className="mid-side">
                    <h5>Status</h5>
                    <p>{props.dataVal ? props.dataVal.status : data.status}</p>
                  </div>
                  <div className="right-side">
                    <h5>Link</h5>
                    <p>{props.dataVal ? props.dataVal.link : data.link}</p>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      }
    </tbody >
  );
};


export default CollapseRow;
