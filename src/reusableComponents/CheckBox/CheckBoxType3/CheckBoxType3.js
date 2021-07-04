import React from "react";

const CheckBoxType3=({name,value})=>{
    return (
        <div className="checkbox-box check-three">
            <input type="checkbox" id="checkbox31" name="checkbox31" value={value} required />
            <label className="chk-label" for="checkbox31">
                <i className="ph-user"></i>
                <span>{name}</span>
            </label>
        </div>
    );
}

export default CheckBoxType3;