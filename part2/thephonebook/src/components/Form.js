import React, { useState } from "react";

const Form = ({ persons, setPersons, setBaseState }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "name") setNewName(e.target.value);
    else setNewNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const filteredPeople = persons.filter(
      (person) => newPerson.name === person.name
    );

    if (filteredPeople.length >= 1) {
      alert(`${newPerson.name} is already included in phonebook`);
    } else {
      setBaseState(persons.concat(newPerson));
      setPersons(persons.concat(newPerson));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          name:{" "}
          <input
            value={newName}
            onChange={(e) => handleChange(e)}
            name="name"
          />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={(e) => handleChange(e)}
            name="number"
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
