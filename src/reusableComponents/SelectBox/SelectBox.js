import React  from "react";
import "./SelectBox.css"
const SelectBox = ({options})=>{
    let optionList = options && options.map(optionItem=><option value={optionItem}>{optionItem}</option>)
    return (
        <div className="select">
        <select className="form-select  mb-3 select-box"  aria-label=".form-select-lg example">
            {optionList}
        </select>
        </div>
    )
}

export default SelectBox;