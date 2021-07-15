import React, { useState,Fragment } from "react";
import { SearchBar,CheckBoxType2, Button } from "../../reusableComponents";



const FilterModal = ({show,onCloseHandler})=>{
    
     const [classObject,setClassObject]=useState({tab1:"block",tab2:"none",tab3:"none"});
     
    const changeActiveTab=(event,id)=>{
        event.preventDefault();
        if(id==0)setClassObject({tab1:"block",tab2:"none",tab3:"none"});
        if(id==1)setClassObject({tab1:"none",tab2:"block",tab3:"none"});
        if(id==2)setClassObject({tab1:"none",tab2:"none",tab3:"block"});
    }
    const tab1=(classname="block")=>(  
    <div id="tab1" style={{display:`${classname}`}}>
        <SearchBar placeholder="Search" sliders={false}/>     
        <div className="ware-list">
            <CheckBoxType2 label="Stockholm-0" id="stockholm-0" value="stockholm-0" name="stockholm-0" style="rev-check"/>
            <CheckBoxType2 label="Bucharest-0" id="bucharest-0" value="bucharest-0" name="bucharest-0" style="rev-check"/>
            <CheckBoxType2 label="Barcelona-0" id="barcelona-0" value="barcelona-0" name="barcelona-0" style="rev-check"/>
            <CheckBoxType2 label="Florence-0" id="florence-0"   value="florence-0" name="florence-0" style="rev-check"/>
            
        </div>
  
    </div>
);

const tab2=(classname="block")=>(

    <div id="tab2" style={{display:`${classname}`}}>                
        <SearchBar placeholder="Search" sliders={false}/>
        <div className="ware-list">
            <CheckBoxType2 label="Stockholm-1" id="stockholm-1" value="stockholm-1" name="1"   style="rev-check"/>
            <CheckBoxType2 label="Bucharest-1" id="bucharest-1" value="bucharest1-1" name="1"   style="rev-check"/>
            <CheckBoxType2 label="Barcelona-1" id="barcelona-1" value="barcelona-1"  name="1" style="rev-check"/>
            <CheckBoxType2 label="Florence-1"  id="florence-1"  value="florenc-1"  name="1" style="rev-check"/>   
        </div>
            
    </div>
);

const tab3=(classname="block")=>( 
    <div id="tab3"  style={{display:`${classname}`}}>        
        <SearchBar placeholder="Search" sliders={false}/>
        <div className="ware-list">
            <CheckBoxType2 label="Stockholm-2" id="stockholm-2" value="stockholm-2" name="stockholm-2" style="rev-check"/>
            <CheckBoxType2 label="Bucharest-2" id="bucharest-2" value="bucharest-2" name="bucharest-2" style="rev-check"/>
            <CheckBoxType2 label="Barcelona-2" id="barcelona-2" value="barcelona-2" name="barcelona-2" style="rev-check"/>
            <CheckBoxType2 label="Florence-2" id="florence-2" value="florence-2"    name="florence-2" style="rev-check"/>
        </div>
    </div>
);
    let tabs=[tab1,tab2,tab3];

    if(!show)return null;
    return (
        <Fragment>
                <div class="mfp-bg mfp-ready"></div>
                <div class="mfp-wrap mfp-auto-cursor mfp-ready" tabindex="-1" style={{overflow: 'hidden auto'}}>
                <div class="mfp-container mfp-inline-holder">
                <div class="mfp-content">
                <div id="filter-modal" class="white-popup-block">
            
                <div className="popup-modal-dismiss"><i onClick={()=>onCloseHandler()} className="ph-x-circle"></i></div>
            
       

        <h2 className="modal-hdn">Add question</h2>

        <div className="cat-list">

            <ul className="filterTab tabs" data-tabgroup="tabSlidegroup">
                <li onClick={(e)=>changeActiveTab(e,0)}><a className="active" href="">Brands</a></li>
                <li onClick={(e)=>changeActiveTab(e,1)}><a href="">Products</a></li>
                <li onClick={(e)=>changeActiveTab(e,2)}><a href="">Stations</a></li>
            </ul>

            <div id="tabSlidegroup" className="tabgroup">
                {tab1(classObject.tab1)}
                {tab2(classObject.tab2)}
                {tab3(classObject.tab3)}
               
            </div>

        </div>


        <div className="filter-btn">
            <Button style="line">Reset</Button>
            <Button >Apply</Button>
        </div>
        
</div></div></div>
    </div>
    </Fragment>
    )
}

export default FilterModal;
