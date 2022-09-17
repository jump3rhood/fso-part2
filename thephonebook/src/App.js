import { useState, useEffect } from 'react'
import personService from './services/persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  
  useEffect(()=> {
    personService.getAll().then(initialPersons => setPersons(initialPersons));
  },[]);

  const addPerson = (personObj) => {
    personService.create(personObj).then(addedPerson => {
      setPersons(persons.concat(addedPerson))
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons}/>
      <h3> Add a New Contact</h3>
      <PersonForm addPerson={addPerson} persons={persons}/>
      <h2>Numbers</h2>
        <Persons persons={persons}/>
    </div>
  )
}

export default App