import React, {useState} from 'react'

const PersonForm = ({persons, addPerson}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
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
        addPerson(newPersonObject);
        setNewName('');
        setNewNumber('');
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={(e)=> setNewName(e.target.value)}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={(e)=> setNewNumber(e.target.value) }/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm