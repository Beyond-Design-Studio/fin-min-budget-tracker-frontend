import React from 'react'
import styles from './SecondLevelTable.module.css'

export default function FirstlevelTable(props) {
  const findPercent = (n) => {
    let percent = (n / (props.currentBudget)) * 100
    return percent
  }
  return (
    <>
      <h4 className={styles.Title}>Second Level Finances</h4>
      <table className={styles.Table}>
        <tr className={styles.Heading}>
          <th>Title</th>
          <th>Amount</th>
          <th>Proportion</th>
        </tr>
        <tr>
          <td>Events</td>
          <td>{props.data.events}</td>
          <td>{findPercent(props.data.events)}%</td>
        </tr>
        <tr>
          <td>Assets</td>
          <td>{props.data.assets}</td>
          <td>{findPercent(props.data.assets)}%</td>
        </tr>
        <tr>
          <td>Other</td>
          <td>{props.data.other}</td>
          <td>{findPercent(props.data.other)}%</td>
        </tr>

      </table>
    </>

  )
}
