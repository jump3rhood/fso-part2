import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 1231231231 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');

  const addPerson = (evt) => {
    evt.preventDefault();
    const personExists = persons.find(person => person.name.toLowerCase() === newName.toLocaleLowerCase());
    if(personExists){
      alert(`${newName} is already added to Phonebook`);
      setNewName('')
      return;
    }
    const newPersonObject = {
      name: newName,
      number: newNumber
    };
    setPersons(persons.concat(newPersonObject));
    setNewName('');
    setNewNumber('');
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={(e)=> setNewName(e.target.value) }/>
        </div>
        <div>
          number: <input value={newNumber} onChange={(e)=> setNewNumber(e.target.value) }/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ol>
        {persons.map(person => <li key={person.name}><strong>{person.name}</strong> - {person.number}</li>)}
      </ol>
    </div>
  )
}

export default App