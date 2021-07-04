import React from "react";

const CheckBoxType1=({name,value})=>{
    return (
        <div className="checkbox-box">
            <input type="checkbox" id="checkbox1" name="checkbox1" value={value} required />
            <label className="chk-label" for="checkbox1">{name}</label>
        </div>
    );
}

export default CheckBoxType1;