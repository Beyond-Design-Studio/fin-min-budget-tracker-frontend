import React from 'react';
import { Pie } from 'react-chartjs-2';
import classes from './PieChart.module.css'

export default function PieChart(props) {
  const dataValues = props.data
  const dataSet = {
    labels: ['Spendings', 'Earnings', 'Current Budget'],
    datasets: [
      {
        label: 'Amount',
        backgroundColor: ['#f17cb0',
          '#faa43a',
          '#60bd68'],
        hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000'],
        data: [dataValues.spendings, dataValues.earnings, dataValues.currentBudget]
      }
    ]
  }
  return (
    <div className={classes.PieChartDiv}>
      <center>
        <Pie data={dataSet}
          width={600}
          height={300}


          options={{
            title: {
              display: true,
              text: 'Budget Breakdown',
              fontSize: 16,
              fontColor: 'Black'
            },
            legend: {
              display: false,
              position: 'bottom'
            },
            maintainAspectRatio: false
          }}
        />
      </center>

    </div>
  )
}
