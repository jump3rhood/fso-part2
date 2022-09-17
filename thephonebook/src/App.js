import { useState, useEffect } from 'react'
import personService from './services/persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Person from './components/Person';

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
  const updatePerson = (id, personObj) => {
    personService.update(id, personObj).then(updatedPerson => {
      const updatedPersons = persons.filter(p => p.id !== id);
      setPersons(updatedPersons.concat(updatedPerson));
      alert(`${updatePerson.name}'s number successfully updated`)
    })
  }
  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id);
    const confirm = window.confirm(`delete ${person.name} from phonebook`);
    if(confirm === false){
      return;
    } 
    personService.deleteOne(id).then(()=> {
      alert('Successfully deleted.');
    }).catch(err => alert('Something went wrong!'));
    setPersons( persons.filter(p=> p.id !== id))
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons}/>
      <h3> Add a New Contact</h3>
      <PersonForm addPerson={addPerson} persons={persons} updatePerson={updatePerson}/>
      <h2>Numbers</h2>
        {persons.map(person=> <Person key={person.id} person={person}  handleDelete={()=> deletePerson(person.id)}/>)}
    </div>
  )
}

export default App