import React,{Fragment} from "react";

const CheckBoxType4Wrong=({name,value})=>{
    return (
        <Fragment>
        <div className="checkbox-box chk-four chk-err">
            <input type="radio" id="checkbox42" className="radio-four" value={value} required />
            <label className="chk-label" for="checkbox42">
                <i className="ph-x-circle"></i>
                <span>{name}</span>
            </label>
        </div>
    </Fragment>
    );
}

export default CheckBoxType4Wrong;