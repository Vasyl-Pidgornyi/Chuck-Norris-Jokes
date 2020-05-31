import React, { useState } from "react";
import ReactDOM from "react-dom";
import { JeneratedJoke } from "./components/JeneratedJoke/JeneratedJoke.jsx";
import { FavoriteJoke } from "./components/FavoriteJoke/FavoriteJoke.jsx";
import { CategoryButtonGenerator } from "./components/CategoryButtonGenerator/CategoryButtonGenerator.jsx";
import { RandomeJokeRequest } from "./components/JokeRequests/RandomeJokeRequest.jsx";
import { CategoryJokeRequest } from "./components/JokeRequests/CategoryJokeRequest.jsx";
import { SearchJokeRequest } from "./components/JokeRequests/SearchJokeRequest.jsx";

function App() {
  const categories = [
    { id: 1, category: "animal" },
    { id: 2, category: "career" },
    { id: 3, category: "celebrity" },
    { id: 4, category: "dev" },
    { id: 5, category: "explicit" },
    { id: 6, category: "fashion" },
    { id: 7, category: "food" },
    { id: 8, category: "history" },
    { id: 9, category: "money" },
    { id: 10, category: "movie" },
    { id: 11, category: "music" },
    { id: 12, category: "political" },
    { id: 13, category: "religion" },
    { id: 14, category: "science" },
    { id: 15, category: "sport" },
    { id: 16, category: "travel" },
  ];

  const [subCategory, setSubCategory] = useState(false);

  const subCategoryHandler = (event) => {
    setSubCategory(!subCategory);
  };
  console.log(subCategory);

  return (
    <main className="page__wrapper">
      <div className="page__content">
        <h3 className="page__content_header">MSI 2020</h3>
        <h1 className="page__content_description-header">Hey!</h1>
        <p className="page__content_description">
          Let’s try to find a joke for you:
        </p>
        <form className="page__content_joke-selection joke-selector">
          <p>
            <input
              type="radio"
              name="jokeRadioSelector"
              className="joke-selector__category-selection"
              defaultChecked="checked"
            />
            <span className="joke-selector__category-description">Random</span>
          </p>
          <p>
            <input
              type="radio"
              name="jokeRadioSelector"
              className="joke-selector__category-selection"
              onChange={subCategoryHandler}
            />
            <span className="joke-selector__category-description">
              From caterogies
            </span>
          </p>
          <div className="joke-selector__subcategory">
            {categories.map((i) => (
              <CategoryButtonGenerator key={i.id} item={i} />
            ))}
          </div>
          <p>
            <input
              type="radio"
              name="jokeRadioSelector"
              className="joke-selector__category-selection"
            />
            <span className="joke-selector__category-description">Search</span>
          </p>
          <input
            type="text"
            placeholder="Free text search..."
            className="joke-selector__search-input-field"
          />
        </form>
        <button className="page__content_getJoke-btn">Get a joke</button>
        <div className="page__content_jeneratedJoke-cover">
          <JeneratedJoke />
          <RandomeJokeRequest />
          <CategoryJokeRequest />
          <SearchJokeRequest />
        </div>
      </div>
      <div className="page__favorites">
        <h3 className="page__favorites_header">Favourite</h3>
        <div className="page__favorites_favoriteJokes-cover">
          <FavoriteJoke />
        </div>
      </div>
    </main>
  );
}

ReactDOM.render(<App />, document.querySelector(".page"));
