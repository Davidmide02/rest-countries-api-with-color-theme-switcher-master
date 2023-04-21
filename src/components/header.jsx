import React from "react";
import { BsMoon } from "react-icons/bs";

function Header() {

const changerColor = ()=> {
  
  
}    
  
    return (
  <div className="flex justify-between align-top font-bold p-6 bg-dark_el-200 mb-6">
    <h1>Where in the world?</h1>

    <div className="dark flex gap-2 items-center "
    onClick={changerColor}
    >
      <BsMoon/>
      <p className="" >Dark Mode</p>
    </div>
  </div>
    )
}

export default Header;