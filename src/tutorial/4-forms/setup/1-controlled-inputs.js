import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, email);
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              className="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              className="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <button className="btn" type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
