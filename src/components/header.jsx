import React from "react";
import { useState } from "react";
import { BsMoon } from "react-icons/bs";

function Header() {
  
  let bodyStyle = document.body.style;
  let newBg = bodyStyle.backgroundColor = 'hsl(207, 26%, 17%)';
  
  const changerColor = () => {
    if ( newBg === 'hsl(207, 26%, 17%)') {
      newBg = 'hsl(0, 0%, 98%)';
      console.log('clicked');
      console.log(newBg);
      
    } else {
      newBg = 'hsl(207, 26%, 17%)';
      console.log('dark');
      console.log(newBg);

    }
    // bodyStyle.backgroundColor = 'hsl(207, 26%, 17%)'

  }
  
 
  
    return (
  <div className="flex justify-between align-top font-bold p-6 bg-dark_el-200 mb-6">
    <h1>Where in the world?</h1>

    <div className="dark flex gap-2 items-center "
    onClick={changerColor}
    onChange={(e)=>{
       e.preventDefault();
       setRegional(e.target.value);
    }
      }
    >
      <BsMoon/>
      <p className="" >Dark Mode</p>
    </div>
  </div>
    )
}

export default Header;