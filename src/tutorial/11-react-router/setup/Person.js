import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const [name, setName] = useState("Default Name");
  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, []);

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, []);
  return (
    <>
      <div>
        <h2>{name}</h2>
        <h3>{id}</h3>
      </div>
      <Link to="/people" className="btn">
        Back to People
      </Link>
    </>
  );
};

export default Person;
