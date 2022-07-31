import React, { useState } from 'react';

const UseStateObject = () => {

  const[person, setPerson] = useState({name: 'Peter', age: 40, message: 'This is a message'})


  // const[name, setName] = useState('Peter')
  // const[age, setAge] = useState(25)
  // const[message, setMessage] = useState('A fake message')

  const changeMessage = () => {
    setPerson({...person, message: 'Hello World'})
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>Change Message</button>
    </>
  )
};

export default UseStateObject;
