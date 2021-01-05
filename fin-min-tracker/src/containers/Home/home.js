import React from 'react';
import {Redirect} from "react-router-dom";
import MinistryCard from '../../components/MinistryCards/MinistryCards'
import firebase from 'firebase/app';

// For carousel: 
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// import sky from '../../assets/sky.jpeg'

import "./home.module.css"

const home = (props) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user === null) {
      console.log(firebase.auth().currentUser);
      props.history.push('/')
    }
  });

  const customRenderThumb = (children) =>
  children.map((_, index) => {
    return <p>{props.ministries[index]}</p>;
  });

  const dynamicCards = props.ministries.map(ministry => {
    return <MinistryCard style={{backgroundColor: "blue"}} name={ministry} />
  })

  return (
    <div className="CarouselDiv">
      <Carousel renderThumbs={customRenderThumb} showStatus={false} showArrows={true}>
        {dynamicCards}
      </Carousel>
    </div>
  )
}


export default home
