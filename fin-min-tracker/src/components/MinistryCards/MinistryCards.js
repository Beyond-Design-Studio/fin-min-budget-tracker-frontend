import React from 'react'
import { Carousel } from 'react-responsive-carousel';

export default function MinistryCards(props) {
  return (
    <Carousel>
      <div>
        <h3>Ministry 1</h3>
        <p>Overview</p>
        <p>Budget Breakdown</p>
        <p>Transactions</p>
      </div>
      <div>
        <h3>Ministry 2</h3>
        <p>Overview</p>
        <p>Budget Breakdown</p>
        <p>Transactions</p>
      </div>
      <div>
        <h3>Ministry 3</h3>
        <p>Overview</p>
        <p>Budget Breakdown</p>
        <p>Transactions</p>
      </div>

    </Carousel>

  )
}
