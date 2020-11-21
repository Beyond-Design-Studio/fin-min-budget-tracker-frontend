import React, { Component } from 'react';
import M from 'materialize-css'
import './home.css'
import sky from '../../assets/sky.jpeg'


class home extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, {
                dist: 0,
                shift: 250,
                numVisible: 3,
            });
        });
    }

    render() {
        return (
            <div className="grid-container">
                <main className="main">
                    <div class="carousel center">
                        <a class="carousel-item" ><img src={sky} /></a>
                        <a class="carousel-item" ><img src={sky} /></a>
                        <a class="carousel-item" ><img src={sky} /></a>
                    </div>
                </main>
            </div>

        )
    }
}

export default home