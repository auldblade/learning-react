import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarsodn";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          console.log(resp.status);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        console.log(user);
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(err);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>loding...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }

  return (
    <>
      <h2>{user}</h2>
    </>
  );
};

export default MultipleReturns;
