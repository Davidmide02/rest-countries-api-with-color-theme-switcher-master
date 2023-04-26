import React, { Fragment } from "react";
import Country from "./countrydetails";
import Singlecard from "./singlecard";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Card({
  countries,
  select,
  search,
  setSearch,
  setSelect,
  mode,
  handleDetails,
}) {
  if (search) {
    return (
      <Singlecard search={search} mode={mode} handleDetails={handleDetails} />
    );
  } else if (select) {
    // console.log("we are geting there");
    return (
      <Link to="/components/countrydetails">

      <div className="card w-full md:grid md:grid-cols-4 lg:gap-12">
        {select.map((country) => {
          return (
            <div
              className={`${
                mode ? "text-dark_text" : "text-text_light-200"
              } w-[80%] rounded-xl mx-auto mb-4 lg:w-[100%] ${
                mode ? "bg-dark_el-200" : "bg-light_el-200"
              }`}
              key={country.name}
              onClick={() => handleDetails(country.name)}
            >
              <img
                src={country.flag}
                alt="flag"
                className="w-full h-[60%] rounded-t-xl pb-4"
              />
              <div className="text p-6">
                <h3>{country.name}</h3>
                <p>Population : {country.population}</p>
                <p>Region : {country.region}</p>
                <p>Capital : {country.capital}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Link>
    );
  } else {
    return (
      <Link to="/components/countrydetails">
        <div className="card md:grid md:grid-cols-4">
          {countries.map((country) => {
            return (
              <div
                className={`card ${
                  mode ? "bg-dark_el-200" : "bg-light_el-200"
                } ${
                  mode ? "text-dark_text" : "text-text_light-200"
                } w-[20rem] rounded-xl mx-auto mb-4 shadow-lg`}
                key={country.name}
                onClick={() => handleDetails(country.name)}
              >
                <img
                  src={country.flag}
                  alt="flag"
                  className="w-full h-[60%] rounded-t-xl pb-4"
                />
                <div className="text p-6">
                  <h3>{country.name}</h3>
                  <p>Population : {country.population}</p>
                  <p>Region : {country.region}</p>
                  <p>Capital : {country.capital}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Link>
    );
  }
}

export default Card;
