import { useState, useEffect } from 'react'
import personService from './services/persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Person from './components/Person';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [message, setMessage] = useState();  
  useEffect(()=> {
    personService.getAll().then(initialPersons => setPersons(initialPersons));
  },[]);

  const addPerson = (personObj) => {
    personService.create(personObj).then(addedPerson => {
      setPersons(persons.concat(addedPerson))
      setMessage({
        type: 'success',
        content: `${personObj.name} successfully added`
      })
      setTimeout(()=> {
        setMessage(null)
      }, 3000);
    })
  }
  const updatePerson = (id, personObj) => {
    personService.update(id, personObj).then(updatedPerson => {
      const updatedPersons = persons.filter(p => p.id !== id);
      setPersons(updatedPersons.concat(updatedPerson));
      setMessage({
        type: 'success',
        content: `${personObj.name}'s number successfully updated`
      });
      setTimeout(()=> {
        setMessage(null)
      }, 3000);
    }).catch(err => {
      setMessage(`Information of ${personObj.name} was already deleted`)
    })
  }
  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id);
    const confirm = window.confirm(`delete ${person.name} from phonebook`);
    if(confirm === false){
      return;
    } 
    personService.deleteOne(id).then(()=> {
      setMessage({
        type: 'success',
        content: 'Successfully deleted.'
      })
      setTimeout(()=>{
        setMessage(null)
      }, 3000);
    }).catch(err => {
      setMessage({
        type: 'error',
        content: 'Something went wrong!'
      })
      setTimeout(()=>{
        setMessage(null)
      }, 3000)
    });
    setPersons( persons.filter(p=> p.id !== id))
  }
  return (
    <div>
      <Notification message={message}/>
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