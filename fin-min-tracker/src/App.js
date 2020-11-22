import React, { Component } from 'react';
import './App.css';
import './containers/Home/home.css'
import axios from 'axios';
// import Navbar from './components/Navbar/navbar';
// import Home from './containers/Home/home';
import MinistryPage from './containers/MinistryPage/MinistryPage';


export default class App extends Component {
  state = {
    ministries: ['Academic Affairs', 'Campus Life', 'Community Well-Being', 'Finance', 'Cultural', 'Parlimentary Affairs', 'Sports', 'Enviornment', 'Technology',
      'House Reserve', 'Interim Budget Reserve']
  }

  // componentDidMount() {
  //   axios.get('https://ashokafinanceministry.herokuapp.com/api/')
  //     .then(response => {
  //       let ministriesObj = response.data;
  //       let ministriesList = Object.keys(ministriesObj)
  //       this.setState({ ministries: ministriesList })
  //       console.log('app.js update');
  //     });
  // }

  render() {
    // const dynamicMinistries = this.state.ministries.map(ministry => {
    //   return <MinistryPage minName={ministry} />
    // })
    return (
      <div>
        {/* // <div className="App"> */}
        {/* <Navbar />
        <div class="landing">
          <p className="landing1">MINISTRIES</p>
          <Home />
        </div> */}
        {/* { dynamicMinistries} */}
        <MinistryPage minName={this.state.ministries[4]} />
      </div>
    )
  }
}



