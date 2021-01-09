import React, {Component} from 'react'
import axios from 'axios'
import SortingTable from '../../components/SortingTable/SortingTable';
import DonutSpinner from "../../components/DonutSpinner/donutSpinner";

import "./transactionPage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {withRouter} from "react-router-dom";
import firebase from 'firebase/app';


class TransactionPage extends Component {
  state = {
    ready: false,
    pages: 0,
    data: null,
  }

  componentDidMount() {
    let minName = this.props.minName
    const api = 'https://ashokafinanceministry.herokuapp.com/api/'
    const token = 'finmin00'
    axios.get(api + minName + '/transactions', {headers: {"Authorization": `Bearer ${token}`}})
      .then(res => {
        console.log('mount', res.data);
        this.setState({
          ready: true,
          data: res.data
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
      axios.get(api + minName + '/transactions', {headers: {"Authorization": `Bearer ${token}`}})
        .then(res => {
          console.log('transactions', res.data);
          this.setState({
            ready: true,
            data: res.data
          })
        }
        )

      firebase.auth().onAuthStateChanged(user => {
        if (user === null) {
          console.log(firebase.auth().currentUser);
          this.props.history.push('/');
        }
      });
    }
  }

  render() {
    // console.log(this.state.data, "Datacheck");
    if (this.state.ready) {
      return (
        <div className="transaction-container">
          <h3 className="transaction-heading">Transactions Page</h3>
          <SortingTable data={Object.values(this.state.data)} />
        </div>

      )
    }
    else {
      return (
        <DonutSpinner></DonutSpinner>
      )
    }

    /*
      * Render the transaction table, I'm using bootstrap
      * Data in this.state.data, extract all rows (individual transactions)
      * Then render them using the dynamicRowRender function
    */


    // const table_data = this.state.data
    // const dynamicRows = []
    // console.log("Table Data", table_data)
    // for (let i in table_data) {
    // dynamicRows.push(table_data[i])
    // }

    /*
      * the "map" function in body is being called by dynamicRows array which
      * calls render function, check comments in beginning of these functions
      * Each table head refers to the Heading shown on table
      * Number of table heads (<th>) = number of columns
    */

    // return (
    // <div style={{background: "#FFFBDB"}}>
    //   <h3>Transactions Page</h3>
    //   <div class="col-auto">
    //     <table className="table-hover Table">
    //       <thead className="table-dark">
    //         <tr>
    //           <th>Date</th>
    //           <th>Type of Transaction</th>
    //           <th>Details</th>
    //           <th>Category</th>
    //           <th>Amount</th>
    //           <th>Status</th>
    //         </tr>
    //       </thead>

    //       { 
    //         // console.log(Object.values(this.state.data ? Object.values(this.state.data) : []))
    //         (this.state.data ? Object.values(this.state.data) : []).map((item, index) => {
    //           return (
    //             <CollapseRowTranscations index={index} transaction={item}></CollapseRowTranscations>
    //           )
    //         })
    //       }

    //     </table>
    //   </div>
    // </div>
    // )
  }
}

export default withRouter(TransactionPage)
