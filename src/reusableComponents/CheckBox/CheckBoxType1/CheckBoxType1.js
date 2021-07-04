import React from "react";

const CheckBoxType1=({label,id,value})=>{
    return (
        <div className="checkbox-box">
            <input type="checkbox" id={id} name="checkbox1" value={value} required />
            <label className="chk-label" for={id}>{label}</label>
        </div>
    );
}

export default CheckBoxType1;