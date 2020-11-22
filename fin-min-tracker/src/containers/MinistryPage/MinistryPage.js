import React, { Component } from 'react'
import Details from '../../components/Details/Details'

import PieChart from '../../components/PieChart/PieChart'
import BarChart from '../../components/BarChart/BarChart'
import classes from './MinistryPage.module.css'
import FirstlevelTable from '../../components/FirstLevelTable/FirstlevelTable'
import SecondLevelTable from '../../components/SecondLevelTable/SecondLevelTable'
import axios from 'axios'

export default class MinistryPage extends Component {
  state = {
    name: "",
    ministerName: "",
    email: "",
    finances: {
      "totalBudget": 20000,
      "currentBudget": 6000,
      "spendings": 10000,
      "earnings": 14000,
      "breakdown": {
        "category": {
          "events": 3000,
          "assets": 1200,
          "other": 900
        }
      }
    }
  };

  componentDidMount() {
    // the minName doesnt seem to be coming here?
    if (this.props.minName){ 
      let minName = this.props.minName
      const api = 'https://ashokafinanceministry.herokuapp.com/api/'
      const token = 'finmin00'
      console.log(minName);
      axios.get(api + minName, { headers: { "Authorization": `Bearer ${token}` } })
        .then(res => {
          console.log(res.data);
          console.log('ministry page update');
          this.setState({
            name: res.data.name,
            ministerName: res.data.ministerName,
            email: res.data.ministerEmail,
            finances: res.data.finances
          })
          console.log(this.state.name)
        })
      }
  }
  render() {

    return (
      <div className={classes.MinistryPage}>
        <Details name={this.state.name} ministerName={this.state.ministerName} email={this.state.email} />
        <FirstlevelTable data={this.state.finances} />
        <div className={classes.GraphsDiv}>
          <PieChart data={this.state.finances} />
          <BarChart data={this.state.finances} />
        </div>
        {/* <SecondLevelTable data={this.state.finances.breakdown} currentBudget={this.state.finances.currentBudget} /> */}
      </div>

    )
  }
}
