import React from 'react'
import styles from './FirstLevelTable.module.css'

export default function FirstlevelTable(props) {
  return (
    <>
      <h4 className={styles.Title}>First Level Finances</h4>
      <table className={styles.Table}>
        <tr className={styles.Heading}>
          <th>Title</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td>Total Budget</td>
          <td>{props.data.totalBudget}</td>
        </tr>
        <tr>
          <td>Spendings</td>
          <td>{props.data.spendings}</td>
        </tr>
        <tr>
          <td>Earnings</td>
          <td>{props.data.earnings}</td>
        </tr>
        <tr>
          <td>Current Budget</td>
          <td>{props.data.currentBudget}</td>
        </tr>
      </table>
    </>

  )
}
