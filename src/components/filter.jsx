import React, { useState } from "react";

function Filter({ setCountries, countries, select, setSelect }) {
  const [value, setValue] = useState();

  function handleClick() {
    // console.log(value);
    if (value === undefined || value === "Filter by region") {
      console.log("I am undefine");
    } else {
      console.log("I have value");
      setValue();
      const region = countries.filter((country) => country.region === value);
      console.log(region);
      setSelect(region);
      console.log(select);
    }
  }

  return (
    <div className="filter p-2 bg">
      <form>
        <select
          className="bg-dark_el-200 p-2 outline-none font-medium mb-6"
          name=""
          id="values"
          onChange={(e) => setValue(e.target.value)}
          onClick={handleClick}
        >
          <option className="bg-dark_el-200" value="Filter by region">
            Filter by region
          </option>
          <option
            className="bg-dark_el-200 font- p-2"
            value="Africa"
            // onChange={(e)=> setSelect(e.target.v)}
            // onClick={handleClick}
          >
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
      </form>
    </div>
  );
}

export default Filter;
