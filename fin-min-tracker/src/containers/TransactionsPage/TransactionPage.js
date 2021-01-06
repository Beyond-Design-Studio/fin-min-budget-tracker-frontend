import React, {Component} from 'react'
import axios from 'axios'
import './transactionPage.module.css'
import SortingTable from '../../components/SortingTable/SortingTable';


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
          console.log('transactions', res.data);
          this.setState({
            ready: true,
            data: res.data
          })
        }
        )
    }
  }

  render() {
    // console.log(this.state.data, "Datacheck");
    if (this.state.ready) {
      return (
        <div style={{background: "#FFFBDB"}}>
          <h3>Transactions Page</h3>
          <SortingTable data={Object.values(this.state.data)} />
        </div>

      )
    }
    else {
      return <h2 style={{textAlign: 'center'}}>Transactions Loading...</h2>
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
