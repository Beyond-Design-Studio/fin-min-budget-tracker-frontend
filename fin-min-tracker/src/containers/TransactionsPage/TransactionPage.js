import React, {Component} from 'react'
import axios from 'axios'
import CollapseRowTranscations from "../../components/CollapseRowTransactions/CollapseRowTransactions";

import "./transactionPage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"


export default class TransactionPage extends Component {
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
  }

  componentDidUpdate() {
    if (this.state.ready === false) {
      let minName = this.props.minName
      const api = 'https://ashokafinanceministry.herokuapp.com/api/'
      const token = 'finmin00'
      axios.get(api + minName + '/transactions', {headers: {"Authorization": `Bearer ${token}`}})
        .then(res => {
          //  console.log('transactions', res.data);
          this.setState({
            ready: true,
            data: res.data
          })
        }
        )
    }
  }

  render() {
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

    return (
      <div className="transaction-container">
        <h3 className="transaction-heading">Transactions</h3>

        <table className="table-hover transaction-table">
          <thead className="table-dark">
            <tr>
              <th>Date</th>
              <th>Type of Transaction</th>
              <th>Details</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          {
            // console.log(Object.values(this.state.data ? Object.values(this.state.data) : []))
            (this.state.data ? Object.values(this.state.data) : []).map((item, index) => {
              return (
                <CollapseRowTranscations index={index} transaction={item}></CollapseRowTranscations>
              )
            })
          }

        </table>
      </div>
    )
  }
}
