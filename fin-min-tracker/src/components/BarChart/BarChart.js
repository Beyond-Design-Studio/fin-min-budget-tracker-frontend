import React from 'react'
import { Bar } from 'react-chartjs-2'

export default function BarChart(props) {
  const dataValues = props.data
  const dataSet = {
    labels: ['Total Budget', 'Current Budget'],
    datasets: [
      {
        label: 'Budget Comparison',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 0,
        data: [dataValues.totalBudget, dataValues.currentBudget, 0]
      }
    ]
  }
  return (
    <div>
      <Bar
        data={dataSet}
        width={800}
        height={300}
        options={{
          title: {
            display: true,
            text: 'Budget Comparsion',
            fontSize: 16,
            fontColor: "#282c34"
          },
          legend: {
            display: false,
            position: 'bottom'
          },
          maintainAspectRatio: true,
          scales: {
            xAxes: [{
              barPercentage:1,
              categoryPercentage: 0.5,
              display: true,
              ticks: {
                fontColor: 'black',
              }
            }],
            yAxes: [{
              display: true,
              ticks: {
                fontColor: '#282c34e'
              }
            }]
          }
        }}
      />
    </div>
  )
}
