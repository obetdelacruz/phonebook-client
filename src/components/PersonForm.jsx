import { useState } from "react";
import personService from "./services/personService";

function PersonForm({ persons, setPersons }) {
  const [newPerson, setNewperson] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newPerson,
      number: newNumber,
    };
    personService
      .createPerson(personObject)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewperson("");
        setNewNumber("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={addPerson} className="flex flex-col gap-4 bg-green-500 p-4">
      <div className="flex flex-col">
        <label>Name </label>
        <input
          className="h-8"
          type="text"
          value={newPerson}
          onChange={(event) => setNewperson(event.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label>Phone Number </label>
        <input
          className="h-8"
          type="text"
          value={newNumber}
          onChange={(event) => setNewNumber(event.target.value)}
        />
      </div>
      <div>
        <button
          className="bg-blue-500 w-32 py-2 text-white font-bold text-center"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default PersonForm;
