import React, { useState } from "react";

const Filter = ({ countries, filtered, setFiltered, setSelectedCountry }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);

    setFiltered(
      countries.filter((country) =>
        country.name.toLowerCase().includes(query.toLowerCase())
      )
    );

    filtered.length === 1 && setSelectedCountry(filtered[0].name);
  };

  return (
    <>
      <p>
        find countries{" "}
        <input type="text" onChange={handleChange} value={query}></input>
      </p>
      {filtered.length > 10 && <p>Too many matches, specify another filter</p>}
    </>
  );
};

export default Filter;
