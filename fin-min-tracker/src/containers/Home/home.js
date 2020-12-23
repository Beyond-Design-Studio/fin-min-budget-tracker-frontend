import React, { Component } from 'react';
import MinistryCard from '../../components/MinistryCards/MinistryCards'
import styles from './home.module.css'

// For carousel: 
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import sky from '../../assets/sky.jpeg'



class home extends Component {

    // componentDidMount() {
    //     document.addEventListener('DOMContentLoaded', function () { 
    //         var elems = document.querySelectorAll('.carousel');
    //         var instances = M.Carousel.init(elems, {
    //             dist: 0,
    //             shift: 250,
    //             numVisible: 3,
    //         });
    //     });
    // }

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
                    {/* <div>
                        <MinistryCard name="Campus Life" />
                    </div>
                    <div>
                        <MinistryCard name="Finance" />
                    </div>
                    <div>
                        <MinistryCard name="Sports" />
                    </div> */}
                </Carousel>
            </div>


            // <div className="grid-container">
            //     <main className="main">
            //         <div class="carousel center">
            //             <a class="carousel-item" ><img src={sky} /></a>
            //             <a class="carousel-item" ><img src={sky} /></a>
            //             <a class="carousel-item" ><img src={sky} /></a>
            //         </div>
            //     </main>
            // </div>
            // <div class="carousel">
            //     <a class="carousel-item" href="#one!"><img src={sky} /></a>
            //     <a class="carousel-item" href="#two!"><img src={sky} /></a>
            //     <a class="carousel-item" href="#three!"><img src={sky} /></a>
            //     <a class="carousel-item" href="#four!"><img src={sky} /></a>
            //     <a class="carousel-item" href="#five!"><img src={sky} /></a>
            // </div>


        )
    }
}


export default home