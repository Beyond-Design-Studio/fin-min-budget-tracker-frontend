import React, { Component } from 'react'
import axios from 'axios'
import ExpandableTable from '../../components/ExpandableTable/ExpandableTable'
import firebase from 'firebase/app';
import {withRouter } from "react-router-dom";
import styles from './BudgetPage.module.css'
class BudgetPage extends Component {
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
    firebase.auth().onAuthStateChanged(user => {
      if (user === null) {
        console.log(firebase.auth().currentUser);
        this.props.history.push('/');
      }
    });
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
    firebase.auth().onAuthStateChanged(user => {
      if (user === null) {
        console.log(firebase.auth().currentUser);
        this.props.history.push('/');
      }
    });
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
export default withRouter(BudgetPage)