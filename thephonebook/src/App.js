import { useState, useEffect } from 'react'
import axios from 'axios';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  
  useEffect(()=> {
    console.log("effect");
    axios.get('http://localhost:3001/persons')
    .then(resp => {
      setPersons(resp.data)
    })
  },[]);

  const addPerson = (personObj) => {
    axios.post('http://localhost:3001/persons', personObj)
    .then(response => {
      setPersons(persons.concat(response.data));
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