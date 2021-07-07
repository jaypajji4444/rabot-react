import React  from "react";
// Style =" statusField"
const SelectBox = ({Style="",options,label="Select"})=>{
    //let optionList = options && options.map(optionItem=><option value={optionItem}>{optionItem}</option>)
    return (
        <div className={`form-grp ${Style}`}>
            <select className="select-field form-field" name="select-fld" id="select-fld" required>
                <option></option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
            </select>
            <p className="form-label">{label}</p>
        </div>
    )
}

export default SelectBox;