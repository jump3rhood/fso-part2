import React from 'react'
import Part from './Part'
const Content = ({parts}) => {

    const renderedParts = parts.map(part=> {
        return <Part key={part.id} name={part.name} exercises={part.exercises} />
    })

  return (
    <div>
        {renderedParts}
    </div>
  )
}

export default Content