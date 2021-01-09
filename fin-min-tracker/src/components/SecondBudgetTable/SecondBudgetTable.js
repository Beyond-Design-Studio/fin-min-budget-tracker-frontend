import React, {Component} from 'react'
import styles from './SecondBudgetTable.module.css'
import SecondModal from '../../components/SecondModal/SecondModal'

export default class SecondBudgetTable extends Component {
  state = {
    rowClicked: null,
    modalVisible: false
  }
  modalToggleHandler = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }
  rowClickedHandler = (title) => {
    this.setState({rowClicked: title})
    this.modalToggleHandler()
  }
  render() {
    const tags = (this.props.tags);
    const tagList = Object.keys(this.props.tags)
    const dynamicRows = tagList.map(tag => {
      return (
        <tr>
          <td>{tag}   <svg onClick={() => this.rowClickedHandler(tag)} role='button' width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
            <circle cx="8" cy="4.5" r="1" />
          </svg></td>
          <td>{tags[tag].current}</td>
          <td>{tags[tag].total}</td>
        </tr>
      )
    })
    const modalVisible = this.state.modalVisible
    if (modalVisible) {
      return (
        <SecondModal className={styles.Modal} tag={this.state.rowClicked} clicked={this.modalToggleHandler} minName={this.props.minName} categoryTitle={this.props.categoryTitle} />
      )
    }
    else {
      return (<table className={styles.Table}>
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
      )
    }


  }
}
