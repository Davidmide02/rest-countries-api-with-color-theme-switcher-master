import React from "react";

function Singlecard({ search, mode, handleDetails }) {
  return (
    <Link to="/components/countrydetails">
      <div className="card h-screen">
        {search.map((country) => {
          return (
            <div
              className={`card ${
                mode ? "text-dark_text" : "text-text_light-200"
              } w-[28%] rounded-xl mx-auto ${
                mode ? "bg-dark_el-200" : "bg-light_el-200"
              }`}
              key={country.name}
              onClick={() => handleDetails(country.name)}
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
    </Link>
  );
}

export default Singlecard;
