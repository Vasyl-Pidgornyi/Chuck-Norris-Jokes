import React, { useState, useEffect } from "react";
import "./CategoryButtonGenerator.scss";

export function CategoryButtonGenerator({ selectedCategoryHandler }) {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [categories, setCategories] = useState();

  const onCategoryChange = (category) => {
    event.preventDefault();
    selectedCategoryHandler(category);
    console.log(category);
  };

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((result) => result.json())
      .then(
        (result) => {
          setCategories(result);
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
    return categories.map((category) => (
      <button
        className="joke-selector__category_btn"
        key={`${category}.id`}
        onClick={() => onCategoryChange(category)}
      >
        {category}
      </button>
    ));
  }
}
