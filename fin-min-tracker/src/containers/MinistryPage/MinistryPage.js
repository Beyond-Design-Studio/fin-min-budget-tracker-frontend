import React, { Component } from 'react'
import Details from '../../components/Details/Details'

import PieChart from '../../components/PieChart/PieChart'
import BarChart from '../../components/BarChart/BarChart'
import classes from './MinistryPage.module.css'
import FirstlevelTable from '../../components/FirstLevelTable/FirstlevelTable'
import SecondLevelTable from '../../components/SecondLevelTable/SecondLevelTable'
// import axios from 'axios'

export default class MinistryPage extends Component {
  state = {
    name: "Sports",
    ministerName: "Mr Sportsman",
    email: "sportsman@sports.ashoka.edu.in",
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
        <SecondLevelTable data={this.state.finances.breakdown.category} currentBudget={this.state.finances.currentBudget} />
      </div>

    )
  }
}
