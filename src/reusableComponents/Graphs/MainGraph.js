import React from "react";

import {Bar} from "react-chartjs-2"

const MainGraph=({data})=>{
    const options= {
        plugins: {
          title: {
            display: false,
            text: 'Chart.js Bar Chart - Stacked'
          },  
          legend:{display:false}
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
            grid:{display:false},
            ticks:{color:"black",font:{size:18}}
          },
          y: {
            stacked: true,
            grid:{display:false},
            ticks:{color:"black",font:{size:18}}
          }
        }     
      }
    return(
        <div className="dash-box2">

        <div className="main-grph-top">
            <div className="main-grp-left">
                <div className="comm-dash">
                    <p>Pack Rate Of SKUs</p>
                    <h5><span className="dot"></span>86 / Hour</h5>
                </div>
                <div className="comm-dash">
                    <p>Avg. Pack Time</p>
                    <h5><span className="dot yel"></span> 2 Min 8 Secs</h5>
                </div>
                <div className="comm-dash">
                    <p>Avg. SKUs / Order</p>
                    <h5><span className="dot gry"></span> 31</h5>
                </div>
            </div>

            <div className="main-grp-left">
                <div className="switch switch--horizontal">
                    <input id="radio-a" type="radio" name="first-switch" checked="checked" />
                    <label for="radio-a">Order</label>
                    <input id="radio-b" type="radio" name="first-switch" />
                    <label for="radio-b">SKU</label>
                    <span className="toggle-outside">
                        <span className="toggle-inside"></span>
                    </span>
                </div>
            </div>

        </div>

        <div className="main-grph">
            <Bar data={data}  width={400} height={100} options={{...options}} />
        </div>

    </div>
    )
}

export default MainGraph;