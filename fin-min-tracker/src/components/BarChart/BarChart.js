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
        borderWidth: 2,
        data: [dataValues.totalBudget, dataValues.currentBudget, 0]
      }
    ]
  }
  return (
    <div>
      <Bar
        data={dataSet}
        width={600}
        height={300}
        options={{
          title: {
            display: true,
            text: 'Budget Comparsion',
            fontSize: 20
          },
          legend: {
            display: false,
            position: 'bottom'
          },
          maintainAspectRatio: false
        }}
      />
    </div>
  )
}
