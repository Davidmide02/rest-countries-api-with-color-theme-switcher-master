import React from "react";
import { useState } from "react";
import { BsMoon } from "react-icons/bs";

function Header({mode, setMode}) {
  
 function changerColor() {
  mode ? setMode(false) : setMode(true);
  
 }
  
    return (
  <div className={`flex justify-between align-top font-bold p-6  ${mode? 'bg-dark_el-200' :'bg-light_el-200'} mb-6 ${mode? 'text-dark_text' :'text-text_light-200'} shadow-lg`}>
    <h1>Where in the world?</h1>

    <div className={`dark flex gap-2 ${mode? 'text-dark_text' :'text-text_light-200'} items-center`}
    onClick={changerColor}
    onChange={(e)=>{
       e.preventDefault();
       setRegional(e.target.value);
    }
      }
    >
      <BsMoon/>
      <p className='' >Dark Mode</p>
    </div>
  </div>
    )
}

export default Header;
// ${mode? 'bg-dark_el-200' :'bg-light_el-200'}