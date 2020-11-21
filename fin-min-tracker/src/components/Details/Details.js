import React from 'react'
import classes from './Details.module.css'
export default function Details(props) {
  return (
    <>
      <div className={classes.Header}>
        <h4>Details</h4>
      </div>
      <div className={classes.Details}>
        <p>Ministry Name: {props.name}</p>
        <p>Minister: {props.ministerName}</p>
        <p>Email: {props.email}</p>
      </div>
    </>

  )
}
