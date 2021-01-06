import React, {Component} from 'react'
import Details from '../../components/Details/Details'

import PieChart from '../../components/PieChart/PieChart'
import BarChart from '../../components/BarChart/BarChart'
import classes from './MinistryPage.module.css'
import FirstlevelTable from '../../components/FirstLevelTable/FirstlevelTable'
import SecondLevelTable from '../../components/SecondLevelTable/SecondLevelTable'
import DonutSpinner from "../../components/DonutSpinner/donutSpinner";
import axios from 'axios'

export default class MinistryPage extends Component {
  state = {
    name: "",
    ministerName: "",
    email: "",
    finances: {
    },
    ready: false
  };

  componentDidMount() {
    // the minName doesnt seem to be coming here?
    let minName = this.props.minName
    const api = 'https://ashokafinanceministry.herokuapp.com/api/'
    const token = 'finmin00'
    axios.get(api + minName, {headers: {"Authorization": `Bearer ${token}`}})
      .then(res => {
        this.setState({
          name: res.data.name,
          ministerName: res.data.ministerName,
          email: res.data.ministerEmail,
          finances: res.data.finances,
          ready: true
        })
      })
  }
  componentDidUpdate() {
    if (this.state.ready === false) {
      let minName = this.props.minName
      const api = 'https://ashokafinanceministry.herokuapp.com/api/'
      const token = 'finmin00'
      axios.get(api + minName, {headers: {"Authorization": `Bearer ${token}`}})
        .then(res => {
          this.setState({
            name: res.data.name,
            ministerName: res.data.ministerName,
            email: res.data.ministerEmail,
            finances: res.data.finances,
            ready: true
          })
        })
    }
  }
  render() {
    if (this.state.ready) {
      return (
        <div className={classes.MinistryPage}>
          <Details name={this.state.name} ministerName={this.state.ministerName} email={this.state.email} />
          <FirstlevelTable data={this.state.finances} />
          <div className={classes.GraphsDiv}>
            <PieChart data={this.state.finances} />
            <BarChart data={this.state.finances} />
          </div>
          <SecondLevelTable data={this.state.finances.breakdown} />
        </div>

      )
    }
    else {
      return <DonutSpinner></DonutSpinner>
    }
  }

}
