import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("q");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";
  console.log(firstValue);
  console.log(secondValue);

  return (
    <>
      <h2>{firstValue}</h2>
      <h2>{secondValue}</h2>
      <h1>{text || "OOO"}</h1>
    </>
  );
};

export default ShortCircuit;
