import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <>
      <div className="item">
        <h4>{name}</h4>
        <button
          className="btn"
          onClick={() => {
            removePerson(id);
          }}
        >
          Remove
        </button>
      </div>
    </>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        console.log(person);
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

export default PropDrilling;
