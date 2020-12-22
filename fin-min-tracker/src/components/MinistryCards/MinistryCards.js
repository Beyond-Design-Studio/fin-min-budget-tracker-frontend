import React from 'react'
import sky from '../../assets/sky.jpeg'
import styles from './MinistryCards.module.css'

export default function MinistryCards(props) {
  return (
    <div className={styles.Card}>
      <h2 className={styles.Title}>{props.name}</h2>
      <p className={styles.Link}>Overview</p>
      <p className={styles.Link}>Budget Breakdown</p>
      <p className={styles.Link}>Transactions</p>
    </div>

  )
}
