import React from 'react'
import styles from './SecondLevelTable.module.css'

export default function FirstlevelTable(props) {
  const findPercent = (current, total) => {
    if ((current === 0) || (total === 0)) {
      return '-'
    }
    else {
      let percent = Math.round((current / total) * 100)
      return percent + '%'
    }

  }


  const financeArray = Object.keys(props.data);

  const tableRows = financeArray.map((title) => {
    return <tr key={title}>
      <td>{(title)}</td>
      <td>{props.data[title].current}</td>
      <td>{props.data[title].total}</td>
      <td>{findPercent(props.data[title].current, props.data[title].total)}</td>
    </tr>
  })


  return (
    <>
      <h4 className={styles.Title}>Second Level Finances</h4>
      <table  className={styles.Table}>
        <thead >
          <tr className={styles.Heading}>
            <th>Title</th>
            <th>Current</th>
            <th>Total</th>
            <th>Proportion of Budget</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>

      </table>
    </>

  )
}
