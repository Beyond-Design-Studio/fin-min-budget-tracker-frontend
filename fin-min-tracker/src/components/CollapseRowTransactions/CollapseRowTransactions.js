import React from "react";
import {format} from 'date-fns'

import ProgressBar from "../ProgressBar/Progress";

import styles from "./CollapseRowTranscations.module.css";

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


const CollapseRowTranscations = (props) => {
  /* 
    * This function renders a row as it needs to be shown on screen
    * Table data, td refer to the specific columns (Order matters)
    * Feel free to tweak into this to add or change data
    * Just create new column, or rearrange columns as needed and you're done
    * === Operation for checking Contents of two strings in JS
    * Table data is "Spending" if state.data.type was spending 
  */

  // console.log(transaction);


  return (
    <div>
      <div className={styles.SecondModalDropTab}>
        <div className={styles.Title}>
          <h5>Summary</h5>
        </div>

        <div className={styles.Content}>
          <div className="left-side">
            <h5>Details</h5>
            <p className={styles.paddingBottom}>{props.transaction ? props.transaction.details : data.details}</p>
            <h5>Date</h5>
            <p>{props.transaction ? format(new Date(props.transaction.date), 'dd/MM/yyyy') : data.date}</p>
          </div>
          <div className="mid-side">
          </div>
          <div className="right-side">
            <h5>Description</h5>
            <p className={styles.paddingBottom}>{props.transaction ? props.transaction.description : data.description}</p>
            <h5>Total</h5>
            <p>{props.transaction ? props.transaction.total : data.total}</p>
          </div>
        </div>
      </div>

      <div className={styles.SecondModalDropTab}>
        <div className={styles.Title}>
          <h5>General Info</h5>
        </div>

        <div className={styles.Content}>
          <div className="left-side">
            <h5>Type</h5>
            <p className={styles.paddingBottom}>{props.transaction ? props.transaction.type : data.type}</p>
            <h5>Tag</h5>
            <p>{props.transaction ? props.transaction.tags : data.tags}</p>
          </div>
          <div className="mid-side">
            <h5>Added at</h5>
            <p>{props.transaction ? format(new Date(props.transaction.addedAt), 'dd/MM/yyyy') : format(new Date(data.addedAt), 'dd/MM/yyyy')}</p>
          </div>
          <div className="right-side">
            <h5>Category</h5>
            <p className={styles.paddingBottom}>{props.transaction ? props.transaction.category : data.category}</p>
            <h5>Bundle</h5>
            <p>{props.transaction ? props.transaction.bundle ? "yes" : "no" : "no"}</p>
          </div>
        </div>
      </div>

      <div className={styles.SecondModalDropTab}>
        <div className={styles.Title}>
          <h5>Track Transaction</h5>
        </div>

        <div className={styles.Content}>
          <div className="left-side">
            <h5>Status</h5>
            <p>{props.transaction ? props.transaction.status : data.status}</p>
            <ProgressBar state={props.transaction ? props.transaction.status : data.status}></ProgressBar>
          </div>
          <div className="mid-side">
          </div>
          <div className="right-side">
            <h5>Link</h5>
            <p>{props.transaction ? props.transaction.link : data.link}</p>
          </div>
        </div>
      </div>
    </div>

  )
}


export default CollapseRowTranscations;
