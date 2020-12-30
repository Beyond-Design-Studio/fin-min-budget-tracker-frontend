import React from 'react'
import {Link} from 'react-router-dom'

import styles from './MinistryCards.module.css'

export default function MinistryCards(props) {
  return (
    <div style={{background: "planegoldenrod"}} className={styles.Card}>
      <h1 className={styles.Title}>{props.name}</h1>

      <div className={styles.Links}>
        <Link to={`/overview/${props.name}`}><p className={styles.Link}>Overview</p></Link>
        <Link to={`/budget/${props.name}`}><p className={styles.Link}>Budget Breakdown</p></Link>
        <Link to={`/transactions/${props.name}`}><p className={styles.Link}>Transactions</p></Link>
      </div>
    </div >

  )
}
