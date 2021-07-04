import React from "react";


const SearchBar = ({placeholder="Search",required=false})=>{
    return (
        <div className="form-grp search-input">
            <input className="form-field" type="text" id="search" name="search" required={required} />
            <p className="form-label">{placeholder}</p>
            <i className="icoSerch ico-one ph-magnifying-glass"></i>
            <i className="icoSerch ico-two ph-sliders"></i>
        </div>
    )
}

export default SearchBar;