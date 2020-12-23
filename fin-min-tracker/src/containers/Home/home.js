import React, { Component } from 'react';
import MinistryCard from '../../components/MinistryCards/MinistryCards'
import styles from './home.module.css'

// For carousel: 
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import sky from '../../assets/sky.jpeg'



class home extends Component {


    render() {
        const customRenderThumb = (children) =>
            children.map((item, index) => {
                return <p>{this.props.ministries[index]}</p>;
            });

        const dynamicCards = this.props.ministries.map(ministry => {
            return <MinistryCard name={ministry} />
        })
        return (
            <div className={styles.CarouselDiv}>
                <Carousel renderThumbs={customRenderThumb} showStatus={false} showArrows={true}>
                    {dynamicCards}
                </Carousel>
            </div>


        )
    }
}


export default home