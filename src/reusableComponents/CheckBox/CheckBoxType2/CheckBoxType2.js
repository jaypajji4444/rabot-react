import React from "react";

const CheckBoxType2=({name,value})=>{
    return (
        <div className="checkbox-box chk-rd">
            <input type="checkbox" id="checkbox21" name="checkbox1"  value={value}required />
            <label className="chk-label" for="checkbox21">{name}</label>
        </div>
    );
}

export default CheckBoxType2;