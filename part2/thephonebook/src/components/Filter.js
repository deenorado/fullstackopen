import React, { useState } from "react";

const Filter = ({ persons, setPersons, baseState }) => {
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.value);

    const filteredPeople = baseState.filter((person) => {
      if (filter === "") {
        setPersons(baseState);
        return null;
      }
      return person.name.toLowerCase().includes(filter.toLowerCase());
    });

    if (filteredPeople.length >= 1) setPersons(filteredPeople);
    else setPersons(baseState);
  };

  return (
    <div>
      <p>filter shown with</p>
      <input type="text" onChange={handleChange} value={filter}></input>
    </div>
  );
};

export default Filter;
