import React from 'react'

const Person = ({person}) => {
    return <p><strong>{person.name}</strong> - {person.number}</p>;
}
const Persons = ({persons}) => {
  return (
    <div>
        {persons.map(person => <Person key={person.name} person={person}/>)}
    </div>
  )
}

export default Persons