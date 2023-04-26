import React from "react";
import {Link} from 'react-router-dom'

function Country({ detail }) {
  return (
    <div className="country">
      {/* <Link> */}
      
       <Link to='/'><button>Back</button></Link> 
      {/* </Link> */}
      {detail.map((country) => {
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

            <div className="text-wrap">
              <h1>{country.name}</h1>
              <div className="flx">
                <div className="text p-6">
                  <p>Native Name: {country.nativeName}</p>
                  <p>Population: {country.population}</p>
                  <p>Sub Region: {country.subregion}</p>
                  <p>Capital: {country.capital}</p>
                </div>
                <div>
                  {console.log('At country')}
                  <p>Top Level Domain: {country.topleveldomain} </p>
                  {/* <p>Currencies: {currencies[1]}</p> */}
                  <p>
                    Languages:{" "}
                    {/* {country.languages.map((lang) => {
                      return <span>{lang.name}</span>;
                    })} */}
                  </p>
                </div>
              </div>
              {/* conditionally render this */}
              {/* {country.border && (
                <div key={country.nativeName}>
                  {border.map((br) => {
                    return <span>{br}</span>;
                  })}
                </div>
              )} */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Country;
