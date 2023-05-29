import { useState } from "react";
import "./App.css";
import PersonList from "./components/PersonList";
import PersonForm from "./components/PersonForm";

function App() {
  const [persons, setPersons] = useState([]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-4xl font-bold">Phonebook</h1>
      <PersonList persons={persons} setPersons={setPersons} />
      <PersonForm persons={persons} setPersons={setPersons} />
    </div>
  );
}

export default App;
