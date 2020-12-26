import React, { Component } from 'react'
import axios from 'axios'
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
          console.log('transactions', res.data);
          this.setState({
            ready: true,
            data: res.data
          })
        })
    }

    // to create rows in the table:
    dynamicRowRender = (transactions, index) => {
      return (
        <tr key={index} style={{ background: transaction.type === "spendings" ? "#eb4d4d" : "#9fff85"}}>
          
        </tr>
      )
    }
  }
  render() {
    return (
      <div>
        <h3>Transactions Page</h3>
      </div>
    )
  }
}
