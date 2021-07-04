import React,{Fragment} from "react";

const CheckBoxType4Correct=({name,value,id,label})=>{
    return (
    <Fragment>
        <div class="checkbox-box chk-four">
            <input type="radio" id={id} name={name}  value={value} />
            <label className="chk-label" for={id}>
                <i className="ph-check-circle"></i>
                <span>{label}</span>
            </label>
        </div>
    </Fragment>
    );
}

export default CheckBoxType4Correct;