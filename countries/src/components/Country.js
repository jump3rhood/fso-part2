import React from 'react'

const Country = ({name, onFilterChange}) => {
  return (
    <div>
        {name} <button value={name} onClick={(e)=>onFilterChange(e)}>show</button>
    </div>
  )
}

export default Country