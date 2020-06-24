import React, { useState, useEffect } from "react";

export function CategoryJokeRequest({ selectedCategory }) {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState();

  // console.log(selectedCategory);

  useEffect(() => {
    // fetch("https://api.chucknorris.io/jokes/random?category={selectedCategory}")
    fetch("https://api.chucknorris.io/jokes/random?category=animal")
      // fetch(
      //   "https://api.chucknorris.io/jokes/random?category=" + selectedCategory
      // )
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
        <li>Category joke:</li>
        <li>Category: {item.categories}</li>
        <li>ID: {item.id}</li>
        <li>Joke: {item.value}</li>
      </ul>
    );
  }
}
