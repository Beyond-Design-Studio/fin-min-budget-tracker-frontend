import React from 'react'
import styles from './FirstLevelTable.module.css'

export default function FirstlevelTable(props) {
  function unCamelCase(str) {
    return str
      // insert a space between lower & upper
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      // space before last upper in a sequence followed by lower
      .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
      // uppercase the first character
      .replace(/^./, function (str) { return str.toUpperCase(); })
  }
  const financeArray = Object.keys(props.data);
  const data = props.data
  financeArray.splice(0, 1)
  const tableRows = financeArray.map((title) => {
    return <tr key={title}>
      <td>{unCamelCase(title)}</td>
      <td>{data[title]}</td>
    </tr>
  })


  return (
    <>
      <h4 className={styles.Title}>First Level Finances</h4>
      <table className={styles.Table}>
        <thead>
          <tr className={styles.Heading}>
            <th>Title</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>

      </table>
    </>

  )
}
