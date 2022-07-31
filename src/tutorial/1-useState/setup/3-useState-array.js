import React from 'react';
import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  const [people, setPeople] = useState(data)
  console.log(people)

  const removeItem = (id) =>{
    setPeople((oldPeople)=>{
      return oldPeople.filter((person) => person.id !== id)
    })
  }

  return (
    <>
      {people.map((person) => {
        const {id, name} = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button className='btn' onClick={() => removeItem(id)}>Remove</button>
          </div>
        )
      })}
      <button className='btn' onClick={() => setPeople([])}>Clear</button>
    </>
  )
};

export default UseStateArray;
