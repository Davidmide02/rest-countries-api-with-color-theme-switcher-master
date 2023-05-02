import React, { useState } from "react";

function Filter({ countries, setSearch, setSelect, mode, setInput }) {
  const [value, setValue] = useState();

  function handleClick() {
    if (value === undefined || value === "Filter by region") {
      return;
    } else {
      setValue();
      // to set the value in the input to empty
      // setInput("");
      const region = countries.filter((country) => country.region === value);
      setSelect(region);
      setSearch(null);
    }
  }

  return (
    <div className="filter p-2 bg">
      <form>
        <select
          className={`${
            mode ? "bg-dark_el-200" : "bg-light_el-200"
          } p-2 outline-none font-medium ${
            mode ? "text-dark_text" : "text-text_light-200"
          } mb-6 font-bold`}
          name=""
          id="values"
          onChange={(e) => setValue(e.target.value)}
          onClick={handleClick}
        >
          <option className={`bg-dark_el-200`} value="Filter by region">
            Filter by region
          </option>
          <option
            className={`${
              mode ? "text-dark_text" : "text-text_light-200"
            } font-bold p-2`}
            value="Africa"
          >
            Africa
          </option>
          <option
            className={`${
              mode ? "text-dark_text" : "text-text_light-200"
            } font-bold p-2`}
            value="Americas"
          >
            Americas
          </option>
          <option
            className={`${
              mode ? "text-dark_text" : "text-text_light-200"
            } font-bold p-2`}
            value="Asia"
          >
            Asia
          </option>
          <option
            className={`${
              mode ? "text-dark_text" : "text-text_light-200"
            } font-bold p-2`}
            value="Europe"
          >
            Europe
          </option>
          <option
            className={`${
              mode ? "text-dark_text" : "text-text_light-200"
            } font-bold p-2`}
            value="Oceania"
          >
            Oceania
          </option>
        </select>
      </form>
    </div>
  );
}

export default Filter;
