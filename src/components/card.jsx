import React, { Fragment } from "react";
import Country from "./countrydetails";
import Singlecard from "./singlecard";

function Card({ countries, select, search }) {

    if (search) {
        return (
            <Singlecard
            search={search}
            />
        )
        
    }
   else if (select) {
    console.log('we are geting there');
    return (
      <div className="card md:grid md:grid-cols-4">
      {select.map((country) => {
        return (
          <div
            className="card bg-slate-600 w-[20rem] rounded-xl mx-auto mb-4 "
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
      

    )
    
   } 

    else {

   
  return (
    <div className="card md:grid md:grid-cols-4">
      {countries.map((country) => {
        return (
          <div
            className="card bg-slate-600 w-[20rem] rounded-xl mx-auto mb-4 "
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
