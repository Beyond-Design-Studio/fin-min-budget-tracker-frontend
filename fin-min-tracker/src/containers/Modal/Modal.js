import React, { Component } from 'react'
import styles from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import SecondBudgetTable from '../../components/SecondBudgetTable/SecondBudgetTable'
export default class Modal extends Component {
  render() {
    return (
      <div>

        <div className={styles.Modal}>
          <SecondBudgetTable tags={this.props.tags} minName={this.props.minName} categoryTitle={this.props.categoryTitle} />

        </div>

        <Backdrop clicked={this.props.clicked} />
      </div>


    )
  }
}
