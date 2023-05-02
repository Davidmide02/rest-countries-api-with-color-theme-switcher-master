import React from "react";
import { Link } from "react-router-dom";

function Country({ detail, mode }) {
  return (
    <div className="country h-screen">
      <Link to="/">
        <button
          className={` ${mode ? "bg-dark_el-200" : "bg-light_el-200"} ${
            mode ? "text-dark_text-200" : "text-text_light-200"
          } py-2 px-10 shadow-lg mb-28 ml-4`}
        >
          Back
        </button>
      </Link>

      {detail.map((country) => {
        return (
          <div
            className={`card ${
              mode ? "text-dark_text-200" : "text-text_light-200"
            } flex flex-col items-center md:flex-row md:justify-between md:px-8 ${
              mode ? "bg-bg_dark-200" : "bg-bg_light-200"
            }`}
            key={country.name}
          >
            <img
              src={country.flag}
              alt="flag"
              className=" w-[80%] mb-3 md:w-[30%] h-[50vh]"
            />

            <div className="text-wrap w-[80%] text-sm flex flex-col md:w-[50%]">
              <h1 className="text-2xl font-bold mb-4">{country.name}</h1>
              <div className="md:flex md:justify-between md:items-start">
                <div className="text">
                  <p className="mb-2">Native Name: {country.nativeName}</p>
                  <p className="mb-2">Population: {country.population}</p>
                  <p className="mb-2">Sub Region: {country.subregion}</p>
                  <p className="mb-2">Capital: {country.capital}</p>
                </div>

                <div className="mt-8 md:mt-0">
                  <p className="mb-2">
                    Top Level Domain: {country.topLevelDomain}{" "}
                  </p>
                  <p className="mb-2">
                    Currencies:{" "}
                    {country.currencies.map((curr) => {
                      return <span key={curr.name}>{curr.name}</span>;
                    })}
                  </p>
                  <p className="mb-2">
                    Languages: {""}
                    {country.languages.map((lang) => {
                      return <span key={lang.iso639_1}>{lang.name}</span>;
                    })}
                  </p>
                </div>
              </div>
              <div className=" ">
                {country.borders && (
                  <div
                    key={country.nativeName}
                    className="py-2 flex md:items-center"
                  >
                    <p className=" font-semibold">Border Countries:</p>
                    {country.borders.map((br) => {
                      return (
                        <span
                          className={`${
                            mode ? "bg-dark_el-200" : "bg-light_el-200"
                          } ${
                            mode ? "text-dark_text-200" : "text-text_light-200"
                          }  py-1 px-5 shadow-lg ml-2 mt-2`}
                        >
                          {br}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Country;
