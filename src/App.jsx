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
  const [search, setSearch] = useState(null)

  return (
    <div className="App bg-bg_dark-200 text-bg_light-200">
      <Header />
      <div className="px-4">

      <Search 
      countries={countries}
      setCountries={setCountries}
      setDetail={setDetail}
      setSearch={setSearch}
      />
      <Filter 
      // setSearch={setSearch}
      setCountries={setCountries}
      countries={countries}
      />
      <Card 
      countries={countries}
      detail={detail}
      search={search}
      />
      </div>
    </div>
  );
}

export default App;
