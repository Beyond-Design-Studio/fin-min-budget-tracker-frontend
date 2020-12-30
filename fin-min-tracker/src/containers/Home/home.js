import React, {Component} from 'react';
import MinistryCard from '../../components/MinistryCards/MinistryCards'

// For carousel: 
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// import sky from '../../assets/sky.jpeg'

import "./home.module.css"


class home extends Component {


  render() {
    const customRenderThumb = (children) =>
      children.map((_, index) => {
        return <p>{this.props.ministries[index]}</p>;
      });

    const dynamicCards = this.props.ministries.map(ministry => {
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
}


export default home
