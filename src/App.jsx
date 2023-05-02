import { useState, useEffect } from "react";
import "./App.css";
import Header from "../src/components/header";
import Search from "./components/search";
import Filter from "./components/filter";
import Card from "./components/card";
import data from "./data.json";
import Country from "./components/countrydetails";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  const [countries, setCountries] = useState(data);
  const [detail, setDetail] = useState(null);
  const [search, setSearch] = useState(null);
  const [select, setSelect] = useState(null);
  const [mode, setMode] = useState(true);
  const [input, setInput] = useState("");

  function handleDetails(name) {
    const countryDetails = countries.find((country) => country.name == name);
    setDetail([countryDetails]);
    console.log(detail);
    console.log(name);
  }

  return (
    <Router>
      <div
        className={`App ${mode ? "darkMode" : "lightMode"} text-bg_light-200`}
      >
        <Header mode={mode} setMode={setMode} />

        <Switch>
          <Route exact path="/">
            <div className="px-4">
              <Search
                countries={countries}
                setCountries={setCountries}
                setSearch={setSearch}
                search={search}
                mode={mode}
                setMode={setMode}
                handleDetails={handleDetails}
                setInput={setInput}
                input={input}
              />
              <Filter
                setSearch={setSearch}
                setCountries={setCountries}
                countries={countries}
                setSelect={setSelect}
                select={select}
                mode={mode}
                setMode={setMode}
                handleDetails={handleDetails}
                setInput={setInput}
              />
              <Card
                countries={countries}
                detail={detail}
                search={search}
                setSearch={setSearch}
                select={select}
                setSelect={setSelect}
                mode={mode}
                setMode={setMode}
                handleDetails={handleDetails}
              />
            </div>
          </Route>

          <Route exact path="/country">
            <Country 
            detail={detail} 
            mode={mode}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
