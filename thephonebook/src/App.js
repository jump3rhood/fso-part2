import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (evt) => {
    evt.preventDefault();
    const newPersonObject = {
      name: newName
    };
    setPersons(persons.concat(newPersonObject));
    setNewName('');
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={(e)=> setNewName(e.target.value) }/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ol>
        {persons.map(person => <li key={person.name}>{person.name}</li>)}
      </ol>
    </div>
  )
}

export default App