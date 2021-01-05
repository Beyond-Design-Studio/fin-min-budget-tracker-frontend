import React from 'react'
import classes from './Details.module.css'



export default function Details(props) {

  return (
    <div>
      <div className={classes.Header}>
        <h2>Details</h2>
      </div>
      <div className={classes.Details}>
        <h3 className={classes.MinHead}>{props.name}</h3>
        <div className={classes.Dets}>
          <p><strong>Minister:</strong> {props.ministerName}</p>
          <p><strong>Email:</strong> {props.email}</p>
        </div>
      </div>
    </div>
  )
}
