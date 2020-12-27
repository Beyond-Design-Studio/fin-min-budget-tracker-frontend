import React, { Component } from 'react'
import axios from 'axios'
import ExpandableTable from '../../components/ExpandableTable/ExpandableTable'
import styles from './BudgetPage.module.css'
export default class BudgetPage extends Component {
  state = {
    ready: false,
    budget: null,
  }
  componentDidMount() {
    let minName = this.props.minName
    const api = 'https://ashokafinanceministry.herokuapp.com/api/'
    const token = 'finmin00'
    axios.get(api + minName + '/budget', { headers: { "Authorization": `Bearer ${token}` } })
      .then(res => {
        console.log('mount', res.data);
        this.setState({
          ready: true,
          budget: res.data
        })
      })
  }

  componentDidUpdate() {
    if (this.state.ready === false) {
      let minName = this.props.minName
      const api = 'https://ashokafinanceministry.herokuapp.com/api/'
      const token = 'finmin00'
      axios.get(api + minName + '/budget', { headers: { "Authorization": `Bearer ${token}` } })
        .then(res => {
          console.log('budget', res.data);
          this.setState({
            ready: true,
            budget: res.data
          })
        })
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: 'white' }}>
        <h1 className={styles.Title}>Budget Page for {this.props.minName} Ministry</h1>
        <ExpandableTable budget={this.state.budget} minName={this.props.minName} />

      </div >
    )
  }
}
