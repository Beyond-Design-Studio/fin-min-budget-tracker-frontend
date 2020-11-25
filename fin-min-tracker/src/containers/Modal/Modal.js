import React, { Component } from 'react'
import styles from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
export default class Modal extends Component {
  render() {
    const tags = (this.props.tags);
    const tagList = Object.keys(this.props.tags)
    const dynamicRows = tagList.map(tag => {
      return (
        <tr>
          <td>{tag}</td>
          <td>{tags[tag].current}</td>
          <td>{tags[tag].total}</td>
        </tr>
      )
    })
    return (
      <div>
        <div className={styles.Modal}>
          <table className={styles.Table}>
            <thead>
              <tr>
                <th>Title of tag</th>
                <th>Current Budget Amount</th>
                <th>Total Budget Amount</th>
              </tr>
              {dynamicRows}
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>

        <Backdrop clicked={this.props.clicked} />
      </div>


    )
  }
}
