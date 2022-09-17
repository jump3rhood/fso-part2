import React, {useState} from 'react'

const PersonForm = ({persons, addPerson, updatePerson}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const foundPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());
        let newPersonObject = null;
        if(foundPerson){
          if(foundPerson.number === newNumber){
            alert(`${newName} is already added to Phonebook`);
            setNewName('')
            return;
          } else{
            newPersonObject = {
              name: foundPerson.name,
              number: newNumber
            }
            updatePerson(foundPerson.id, newPersonObject);
            setNewName('');
            setNewNumber('');
            return;
          }
        }
        newPersonObject = {
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