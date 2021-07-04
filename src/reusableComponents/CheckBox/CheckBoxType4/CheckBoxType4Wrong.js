import React,{Fragment} from "react";

const CheckBoxType4Wrong=({label,name,value,id})=>{
    return (
        <Fragment>
        <div className="checkbox-box chk-four chk-err">
            <input type="radio" id={id} name={name}  value={value} required />
            <label className="chk-label" for={id}>
                <i className="ph-x-circle"></i>
                <span>{label}</span>
            </label>
        </div>
    </Fragment>
    );
}

export default CheckBoxType4Wrong;