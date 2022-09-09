import React from 'react'
import Part from './Part'
const Content = ({parts}) => {
    const total = parts.reduce((s, p)=> {
        return s += p.exercises;   
    }, 0);
        
    const renderedParts = parts.map(part=> {
        return <Part key={part.id} name={part.name} exercises={part.exercises} />
    })

  return (
    <div>
        {renderedParts}
        <p><strong>total of {total} exercises</strong></p>
    </div>
  )
}

export default Content