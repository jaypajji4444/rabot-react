import React, { Fragment } from "react";


const SearchBar = ({placeholder="Search",required=false,sliders=false})=>{
    return (
        <Fragment>
        {sliders?
        (<div className="form-grp search-input form-grp-var">
            <input className="form-field" type="text" id="search" name="search" required={required} />
            <p className="form-label">{placeholder}</p>
            <i className="icoSerch ico-one ph-magnifying-glass"></i>
            <i className="icoSerch ico-two ph-sliders"></i>
        </div>):
        (
            <div className="form-grp form-grp-var">
                <input type="text" className="form-field" name="time1" required=""/>
                <p className="form-label">Search</p>
                <i className="var-chart ph-magnifying-glass"></i>
            </div>
        )
    }
    </Fragment>
    )
}

export default SearchBar;