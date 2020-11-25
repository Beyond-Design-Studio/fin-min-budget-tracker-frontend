import React, { Component } from 'react'
import styles from './ExpandableTable.module.css'
import Modal from '../../containers/Modal/Modal'

export default class ExpandableTable extends Component {
  state = {
    rowClicked: null,
    modalVisible: false
  }

  rowClickedHandler = (title) => {
    this.setState({ rowClicked: title })
    this.modalToggleHandler()
  }
  modalToggleHandler = () => {

    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }
  render() {
    if (this.props.budget) {
      const budget = this.props.budget
      const finances = Object.keys(budget)
      const dynamicRows = finances.map(title => {
        if ('tags' in budget[title]) {
          return (
            <tr key={title} className={styles.modalAvailable} onClick={() => this.rowClickedHandler(title)} >
              <td>{title}</td>
              <td>{budget[title].current}</td>
              <td>{budget[title].total}</td>
            </tr >)
        }
        else {
          return (
            <tr key={title} >
              <td>{title}</td>
              <td>{budget[title].current}</td>
              <td>{budget[title].total}</td>
            </tr>
          )
        }

      })
      const modalVisible = this.state.modalVisible
      return (
        <div className={styles.Container}>
          {
            modalVisible
              ? <Modal tags={this.props.budget[this.state.rowClicked].tags} clicked={this.modalToggleHandler} />
              : <table className={styles.Table}>
                <thead>
                  <tr className={styles.Heading}>
                    <th>Title</th>
                    <th>Current Budget Amount</th>
                    <th>Total Budget Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {dynamicRows}
                </tbody>
              </table>}
        </div >

      )
    }
    else {
      return <h3>Loading...</h3>
    }

  }

}
