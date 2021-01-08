import React, {useState, useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import NavbarComp from './containers/Navbar/Navbar'
import './App.css';
import './containers/Home/home.css'
import axios from 'axios';

import Home from './containers/Home/home';
import MinistryPage from './containers/MinistryPage/MinistryPage';
import BudgetPage from './containers/BudgetPage/BudgetPage';
import TransactionPage from './containers/TransactionsPage/TransactionPage';
import Landing from "./containers/LandingPage/landingPage";
import Contact from "./containers/Contact/Contact";
import Footer from "./containers/Footer/Footer";

const ErrorPage = (props) => {
  props.history.push('/');
  return (
    <Landing />
  )
}

const App = () => {
  const [ministries, setMinistries] = useState([]);
  // Getting Ministries' data from the backend: 
  useEffect(() => {
    const fetchMinistries = async () => {
      await axios.get('https://ashokafinanceministry.herokuapp.com/api/')
        .then(response => {
          let ministriesObj = response.data;
          let ministriesList = Object.keys(ministriesObj)
          setMinistries(ministriesList);
        })
        .catch(err => {
          console.log(err);
        })
    }
    fetchMinistries();
    // if (auth.currentUser) setSignedIn(true);  
  }, []);


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
      <NavbarComp />
      <Switch>
        <Route path='/' exact render={() => <Landing />} />
        <Route path='/home' render={(routerProps) => <Home {...routerProps} ministries={ministries} />} />
        <Route path="/contact-us" render={Contact} />
        <Route path='/overview/:ministry' render={routerProps => (renderMinistryPage(routerProps))} />
        <Route path='/budget/:ministry' render={routerProps => (renderBudgetPage(routerProps))} />
        <Route path='/transactions/:ministry' render={routerProps => (renderTransactionsPage(routerProps))} />
        <Route path='*' component={ErrorPage} />
      </Switch>
      <Footer />
    </div>
  )

}

export default App;




