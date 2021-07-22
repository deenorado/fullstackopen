import React, { useEffect, useState } from "react";
import axios from "axios";
import Country from "./components/Country";
import Filter from "./components/Filter";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("United States");
  const [filtered, setFiltered] = useState("");

  useEffect(() => {
    const getData = async () => {
      await axios.get("https://restcountries.eu/rest/v2/all").then((result) => {
        setCountries(result.data);
      });
    };

    getData();
  }, []);

  return (
    <>
      <Filter
        countries={countries}
        filtered={filtered}
        setFiltered={setFiltered}
        setSelectedCountry={setSelectedCountry}
      />
      <Country
        filtered={filtered}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
    </>
  );
}

export default App;
