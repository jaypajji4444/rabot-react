import React from "react";
import {SelectBox} from "../index";
import { mainGrapImg } from "../../img";

const MainGraph=()=>{
    return(
        <div class="dash-box2">

        <div class="main-grph-top">
            <div class="main-grp-left">
                <div class="comm-dash">
                    <p>Pack Rate Of Orders</p>
                    <h5><span class="dot"></span> 42/Hour</h5>
                </div>
                <div class="comm-dash">
                    <p>Pack Rate Of SKUs</p>
                    <h5><span class="dot pur"></span> 86/Hour</h5>
                </div>
                <div class="comm-dash">
                    <p>Avg. Pack Time</p>
                    <h5><span class="dot yel"></span> 2 Min 8 Secs</h5>
                </div>
                <div class="comm-dash">
                    <p>Avg. SKUs / Order</p>
                    <h5><span class="dot gry"></span> 31</h5>
                </div>
              
            </div>
            <div class="main-grp-left">
                
                <div class="comm-dash">
                    <p>Period</p>
                      <SelectBox label="Year" Style="graph-form"/>
                    
                </div>
    
            </div>

        </div>

        <div class="main-grph">
            <img src={mainGrapImg} alt=""/>
        </div>

    </div>
    )
}

export default MainGraph;