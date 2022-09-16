import React from 'react'

const Filter = ({filter, onFilterChange}) => {
  return (
    <div>
        find countries <input value={filter} onChange={(e) => onFilterChange(e)} />
    </div>

  )
}

export default Filter