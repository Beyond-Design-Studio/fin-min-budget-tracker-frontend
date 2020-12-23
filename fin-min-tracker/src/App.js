import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';
import './containers/Home/home.css'
import axios from 'axios';

import Navbar from './components/Navbar/navbar';
import Home from './containers/Home/home';
import MinistryPage from './containers/MinistryPage/MinistryPage';
import BudgetPage from './containers/BudgetPage/BudgetPage';
import TransactionPage from './containers/TransactionsPage/TransactionPage';

import MinistryCards from './components/MinistryCards/MinistryCards';


export default class App extends Component {
  state = {
    // ministries: ['Academic Affairs', 'Campus Life', 'Community Well-Being', 'Finance', 'Cultural', 'Parlimentary Affairs', 'Sports', 'Enviornment', 'Technology',
    //   'House Reserve', 'Interim Budget Reserve']
    ministries: []
  }

  componentDidMount() {
    axios.get('https://ashokafinanceministry.herokuapp.com/api/')
      .then(response => {
        let ministriesObj = response.data;
        let ministriesList = Object.keys(ministriesObj)
        this.setState({ ministries: ministriesList })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const renderMinistryPage = (routerProps) => {
      let ministry = routerProps.match.params.ministry
      return (<MinistryPage minName={ministry} />)
    }
    const renderBudgetPage = (routerProps) => {
      let ministry = routerProps.match.params.ministry
      return (<BudgetPage minName={ministry} />)
    }
    const renderTransactionsPage = (routerProps) => {
      let ministry = routerProps.match.params.ministry
      return (<TransactionPage minName={ministry} />)
    }

    return (
      <div className="App">
        {/* <Home ministries={this.state.ministries} /> */}
        <Switch>
          <Route path='/' exact render={routerProps => (<Home {...routerProps} ministries={this.state.ministries} />)} />
          <Route path='/overview/:ministry' render={routerProps => (renderMinistryPage(routerProps))} />
          <Route path='/budget/:ministry' render={routerProps => (renderBudgetPage(routerProps))} />
          <Route path='/transactions/:ministry' render={routerProps => (renderTransactionsPage(routerProps))} />
        </Switch>

        {/* < MinistryPage minName={this.state.ministries[3]} /> */}
        {/* <BudgetPage minName={this.state.ministries[3]} /> */}
        {/* <TransactionPage minName={this.state.ministries[3]} /> */}

      </div>
    )
  }
}



