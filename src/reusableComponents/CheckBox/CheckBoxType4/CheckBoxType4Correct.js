import React,{Fragment} from "react";

const CheckBoxType4Correct=({name,value})=>{
    return (
    <Fragment>
        <div class="checkbox-box chk-four">
            <input type="radio" id="checkbox41" className="radio-four"  value={value} />
            <label className="chk-label" for="checkbox41">
                <i className="ph-check-circle"></i>
                <span>{name}</span>
            </label>
        </div>
    </Fragment>
    );
}

export default CheckBoxType4Correct;