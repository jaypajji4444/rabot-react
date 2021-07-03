import React from "react";
import "./CheckBox.css"

const CheckBox = ({name,value})=>{
    return (
        <div class="form-check">
            <input type="checkbox" className="form-check-input box" id="exampleCheck1" />
            <label className="form-check-label box_label ml-2" for="exampleCheck1">Check me out</label>
        </div>
    )
}

export default CheckBox;