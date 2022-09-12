import { useState } from 'react'


const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [foundPersons, setFoundPersons] = useState([]);

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

  const searchPersons = (e) => {
    e.preventDefault();
    if(filter.length > 0){
      const foundPeople = persons.filter(p=> p.name.toLowerCase().includes(filter.toLowerCase()))
      if(foundPeople)
        setFoundPersons([...foundPeople])
    }
    setFilter('');
  }
  console.log(foundPersons);
    
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <form onSubmit={searchPersons}>
        Filter shown with: <input value={filter} onChange={(evt) => setFilter(evt.target.value)}/>
        <button>Search</button>
        </form>
        <br/>
        {foundPersons.length >0 ?foundPersons.map(p => <p key={p.name}>{p.name}</p>) : ""}
      </div>
      <h3> Add a New Contact</h3>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={(e)=> setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(e)=> setNewNumber(e.target.value) }/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
        {persons.map(person => <p key={person.name}><strong>{person.name}</strong> - {person.number}</p>)}
    </div>
  )
}

export default App