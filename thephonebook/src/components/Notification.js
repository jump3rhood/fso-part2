import React from 'react'

const Notification = ({message}) => {
    console.log(message);
    if(!message)
        return null
    const msg = {
        color: message.type === "success" ? 'green' : 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: '10',
        marginBottom: '10'
    };
        
  return (
    <div style={msg} >
        {message.content}
    </div>
  )
}

export default Notification