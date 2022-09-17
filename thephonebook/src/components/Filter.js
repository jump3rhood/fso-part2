import React, {useState} from 'react'

const Filter = ({persons}) => {
    const [filter, setFilter] = useState('');
    let foundPeople = [];
    if(filter)
        foundPeople = persons.filter(p=> p.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <div>
        Filter shown with: <input value={filter} onChange={(evt) => setFilter(evt.target.value)}/>
        <br/>
        {foundPeople && foundPeople.length > 0 ?foundPeople.map(p => <p key={p.name}>{p.name}</p>) : ""}
      </div>
  )
}
export default Filter