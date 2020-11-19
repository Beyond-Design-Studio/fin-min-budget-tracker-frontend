import React from 'react'
import classes from './Details.module.css'
export default function Details(props) {
  return (
    <div className={classes.Details}>
      <p>Ministry Name: {props.name}</p>
      <p>Minister: {props.ministerName}</p>
      <p>Email: {props.email}</p>
    </div>
  )
}
