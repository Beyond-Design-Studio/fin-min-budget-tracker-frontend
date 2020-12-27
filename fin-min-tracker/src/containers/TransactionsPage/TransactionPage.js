import React, { Component } from 'react'
import axios from 'axios'
import './transactionPage.module.css'

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
    axios.get(api + minName + '/transactions', { headers: { "Authorization": `Bearer ${token}` } })
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
      axios.get(api + minName + '/transactions', { headers: { "Authorization": `Bearer ${token}` } })
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

  // Creating a separate function to render the rows in the way we need them
  dynamicRowRender = (transaction, index) => {
    /* 
      * This function renders a row as it needs to be shown on screen
      * Table data, td refer to the specific columns (Order matters)
      * Feel free to tweak into this to add or change data
      * Just create new column, or rearrange columns as needed and you're done
      * === Operation for checking contents of two strings in JS
      * Table data is "Spending" if state.data.type was spending 
    */

    // console.log(transaction);
    return (
      transaction && 
      <tr key={index} className={transaction.type === "spendings" ? "table-danger" : "table-success"}>
        <td> {transaction.date} </td>
        <td> {transaction.type === "spendings" ? "Spending" : "Earning"} </td>
        <td> {transaction.tags} </td>
        <td> {transaction.category} </td>
        <td> {transaction.total} </td>
        <td> {transaction.status} </td>
      </tr>
    
  )
  }

  render() {
    /*
      * Render the transaction table, I'm using bootstrap
      * Data in this.state.data, extract all rows (individual transactions)
      * Then render them using the dynamicRowRender function
    */
    // console.log(this.state.data);
    const table_data = this.state.data
    const dynamicRows = []
    console.log("Table Data", table_data)
    // Please do this in a better way: I couldn't do it with map function
    for (let i in table_data) {
      dynamicRows.push(table_data[i])
    }

    /*
      * the "map" function in body is being called by dynamicRows array which
      * calls render function, check comments in beginning of these functions
      * Each table head refers to the Heading shown on table
      * Number of table heads (<th>) = number of columns
    */

    return (
      <div style={{background: "#FFFBDB"}}>
        <h3>Transactions Page</h3>
        <div class="col-auto">
          <table className="table-hover Table">
            <thead className="table-dark">
              <tr >
                <th>
                  Date
                </th>

                <th>
                  Type of Transaction
                </th>

                <th>
                  Details
                </th>

                <th>
                  Category
                </th>

                <th>
                  Amount
                </th>

                <th>
                  Status 
                </th>
              </tr>
            </thead>
            
            <tbody>
              {dynamicRows.map(this.dynamicRowRender)}
            </tbody>
            
          </table>
        </div>
      </div>
    )
  }
}