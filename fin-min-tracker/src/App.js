import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MinistryPage from './containers/MinistryPage/MinistryPage';


export default class App extends Component {
  state = {
    ministries: []
  }
  componentDidMount() {
    axios.get('https://ashokafinanceministry.herokuapp.com/api/')
      .then(response => {
        let ministriesObj = response.data;
        let ministriesList = Object.keys(ministriesObj)
        this.setState({ ministries: ministriesList })
      });
  }

  render() {
    // const dynamicMinistries = this.state.ministries.map(ministry => {
    //   return <MinistryPage minName={ministry} />
    // })
    return (
      <>

        {/* { dynamicMinistries} */}
        {/* <MinistryPage minName={this.state.ministries[0]} /> */}
      </>
    )
  }
}



