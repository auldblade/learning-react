import React, { useState, useEffect } from "react";
import { useFetch } from "./2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  const { loading, products } = useFetch(url);

  return (
    <>
      {products.map((p, index) => {
        return (
          <li key={p.id} className="item">
            {p.fields.name}
          </li>
        );
      })}
    </>
  );
};

export default Example;
