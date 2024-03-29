import React, { useState, useEffect } from "react";

export function SearchJokeRequest({ jokeRequest }) {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState();

  // console.log(jokeRequest);

  useEffect(() => {
    // fetch("https://api.chucknorris.io/jokes/search?query={query}")
    fetch("https://api.chucknorris.io/jokes/search?query=/chuck")
      // fetch("https://api.chucknorris.io/jokes/search?query=" + jokeRequest)
      .then((result) => result.json())
      .then(
        (result) => {
          setItem(result);
          setIsLoaded(true);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        <li>__________________________________________________________</li>
        <li>Search joke:</li>
        <li>ID: {item.id}</li>
        <li>Joke: {item.value}</li>
      </ul>
    );
  }
}
