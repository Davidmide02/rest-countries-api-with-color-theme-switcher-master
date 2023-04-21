import React, { useState } from "react";

function Filter({setCountries, countries}) {

    const [select, setSelect] = useState(null)

    if (select) {
       
        // console.log("I am not null");
        // console.log(select);
        // const region = countries.find((country) => country.region==select )
        // console.log(region);
        // const regino = countries.filter(country=> country.region == select)
        // console.log(regino);
        // setCountries(regino)
    }
  return (
    <div className="filter p-2 bg">
      <select
        className="bg-dark_el-200 p-2 outline-none font-medium mb-6"
        name=""
        id=""
        onChange={(e)=> setSelect(e.target.value)}
      >
        <option className="bg-dark_el-200" value="Filter by region">
          Filter by region
        </option>
        <option className="bg-dark_el-200 font- p-2" value="Africa">
          Africa
        </option>
        <option className="bg-dark_el-200 font- p-2" value="Americas">
          Americas
        </option>
        <option className="bg-dark_el-200 font- p-2" value="Asia">
          Asia
        </option>
        <option className="bg-dark_el-200 font- p-2" value="Europe">
          Europe
        </option>
        <option className="bg-dark_el-200 font- p-2" value="Oceania">
          Oceania
        </option>
      </select>
    </div>
  );
}

export default Filter;
