import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

function Search({ countries, setSearch, mode, input, setInput }) {

  
  function handleSubmit(e) {
    e.preventDefault();

    if (!input) {
      alert("enter a country name");
    } else {
      const inputC = input.split("");
      // all character into lowercase
      for (let index = 0; index < inputC.length; index++) {
        const element = inputC[index].toLowerCase();
        inputC[index] = inputC[index].toLowerCase();
      }
      //  first letter to uppercase
      const c = inputC[0].toUpperCase();
      let d = inputC.slice(1);
      d.unshift(c);
      const convertedWord = d.join("");

      const b = [countries.find((country) => country.name == convertedWord)];
      b == false ? alert("enter a valid country name") : setSearch(b);
    }
  }

  return (
    <div
      className={`search w-full  ${
        mode ? "bg-dark_el-200" : "bg-light_el-200"
      } rounded flex p-2 pl-4 mb-6 items-center ${
        mode ? "text-dark_text" : "text-text_light-200"
      } shadow-lg`}
    >
      <FiSearch />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a country.."
          className="bg-transparent outline-none border-none ml-2 text-input_text-200"
          onChange={(e) => {
            e.preventDefault();
            setInput(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default Search;
