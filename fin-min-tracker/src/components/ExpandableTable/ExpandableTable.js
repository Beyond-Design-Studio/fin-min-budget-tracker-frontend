import React, { Component } from 'react'
import styles from './ExpandableTable.module.css'
import Modal from '../../containers/Modal/Modal'

export default class ExpandableTable extends Component {
  state = {
    rowClicked: null,
    modalVisible: false,
    categoryTitle: null
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
            <tr key={title}  >
              <td>{title}  <svg onClick={() => this.rowClickedHandler(title)} role='button' width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
                <circle cx="8" cy="4.5" r="1" />
              </svg></td>
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

              ? <>
                <Modal tags={this.props.budget[this.state.rowClicked].tags} clicked={this.modalToggleHandler} minName={this.props.minName} categoryTitle={this.state.rowClicked} />
                <div class="table-responsive ">
                  <table class='table table-bordered'>
                    <thead class='thead-dark'>
                      <tr className={styles.Heading}>
                        <th>Title</th>
                        <th>Current Budget Amount</th>
                        <th>Total Budget Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dynamicRows}
                    </tbody>
                  </table>
                </div>}
              </>
              : <div class="table-responsive ">
                <table class='table table-bordered'>
                  <thead class='thead-dark'>
                    <tr className={styles.Heading}>
                      <th>Title</th>
                      <th>Current Budget Amount</th>
                      <th>Total Budget Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dynamicRows}
                  </tbody>
                </table>
              </div>}
        </div >

      )
    }
    else {
      return <h3>Loading...</h3>
    }

  }

}
