import { useState, useEffect } from "react";
import "./App.css";
import Header from "../src/components/header";
import Search from "./components/search";
import Filter from "./components/filter";
import Card from "./components/card";
import  data  from "./data.json"

function App() {
  // const [count, setCount] = useState(0);
  const [countries, setCountries] = useState(data);
  const [detail, setDetail] = useState(false);
  const [search, setSearch] = useState(null);
  const [select, setSelect] = useState(null);
  const [mode, setMode] = useState(true);


  return (
    <div className={`App ${mode? 'darkMode' :'lightMode'} text-bg_light-200`}>
      <Header 
      mode={mode}
      setMode={setMode}
      />
      <div className="px-4">

      <Search 
      countries={countries}
      setCountries={setCountries}
      setDetail={setDetail}
      setSearch={setSearch}
      search={search}
      mode={mode}
      setMode={setMode}
      />
      <Filter 
      // setSearch={setSearch}
      setCountries={setCountries}
      countries={countries}
      setSelect={setSelect}
      select={select}
      mode={mode}
      setMode={setMode}
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

      />
      </div>
    </div>
  );
}

export default App;
