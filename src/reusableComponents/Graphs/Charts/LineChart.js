import React from "react";
import {Line} from "react-chartjs-2"

const LineChart = ({color="green"})=>{
    
    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: color,
            borderColor: color,
            pointBackgroundColor:"white"
        },
        ],
    };
    const options = {
      plugins: {
        title: {
          display: false,
          text: 'Chart.js Bar Chart - Stacked'
        },  
        legend:{display:false}
      },
      responsive: true,
        scales: {
          x:{
            display:false,
            grid:{display:false},
          },
          y:{
            display:false,
            grid:{display:false},
          }

          
        },
      };
    return(<Line data={data} options={options}/>)
}

export default LineChart;