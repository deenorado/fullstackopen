import React, { useState } from "react";
import Form from "./components/Form";
import Persons from "./components/Persons";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [baseState, setBaseState] = useState([]);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setPersons={setPersons} baseState={baseState} />
      <h2>add a new</h2>
      <Form
        persons={persons}
        setPersons={setPersons}
        setBaseState={setBaseState}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
