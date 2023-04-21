import React, { Fragment } from "react";
import Country from "./countrydetails";
import Singlecard from "./singlecard";

function Card({ countries, detail, search }) {

    if (search) {
        return (
            <Singlecard
            search={search}
            />
        )
        
    }
    else {

   
  return (
    <div className="card">
      {countries.map((country) => {
        return (
          <div
            className="card bg-slate-600 w-[70%] rounded-xl mx-auto mb-4"
            key={country.name}
          >
            <img
              src={country.flag}
              alt="flag"
              className="w-full rounded-t-xl pb-4"
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
  );
}

}

export default Card;
