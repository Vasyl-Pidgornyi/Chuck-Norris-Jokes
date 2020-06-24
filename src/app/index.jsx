import React, { useState } from "react";
import ReactDOM from "react-dom";
import { JeneratedJoke } from "./components/JeneratedJoke/JeneratedJoke.jsx";
import { FavoriteJoke } from "./components/FavoriteJoke/FavoriteJoke.jsx";
import { CategoryButtonGenerator } from "./components/CategoryButtonGenerator/CategoryButtonGenerator.jsx";
import { RandomJokeRequest } from "./components/Requests/RandomJokeRequest.jsx";
import { CategoryJokeRequest } from "./components/Requests/CategoryJokeRequest.jsx";
import { SearchJokeRequest } from "./components/Requests/SearchJokeRequest.jsx";
import { Requests } from "./components/Requests/Requests.jsx";

function App() {
  const getJokeMethod = {
    Random: "Random",
    ByCategory: "ByCategory",
    BySearch: "BySearch",
  };

  const [jokeGetMethod, setjokeGetMethod] = useState(getJokeMethod.Random);
  const [selectedCategory, setSelectedCategory] = useState();
  const [searchRequest, setJokeRequest] = useState();
  const [jokes, setJokes] = useState([]);

  const changeJokeMethodHandler = (getMethod) => {
    setjokeGetMethod(getMethod);
  };

  const selectedCategoryHandler = (category) => {
    setSelectedCategory(category);
  };

  const jokeRequestHandler = (event) => {
    setJokeRequest(event.target.value);
  };

  const getJokeButtonHandler = async () => {
    let jokeList;
    if (jokeGetMethod === getJokeMethod.Random) {
      jokeList = new Array(await Requests.getRandomeJoke());
    } else if (jokeGetMethod === getJokeMethod.ByCategory) {
      jokeList = new Array(await Requests.getCategoryJoke(selectedCategory));
    } else {
      jokeList = (await Requests.getSearchJoke(searchRequest)).result;
    }
    setJokes(jokeList);
  };

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
              onChange={() => changeJokeMethodHandler(getJokeMethod.Random)}
            />
            <span className="joke-selector__category-description">Random</span>
          </p>
          <p>
            <input
              type="radio"
              name="jokeRadioSelector"
              className="joke-selector__category-selection"
              onChange={() => changeJokeMethodHandler(getJokeMethod.ByCategory)}
            />
            <span className="joke-selector__category-description">
              From caterogies
            </span>
          </p>
          <div
            className={`joke-selector__categories ${
              jokeGetMethod != getJokeMethod.ByCategory ? "hidden" : ""
            }`}
          >
            <CategoryButtonGenerator
              selectedCategoryHandler={selectedCategoryHandler}
            />
          </div>
          <p>
            <input
              type="radio"
              name="jokeRadioSelector"
              className="joke-selector__category-selection"
              onChange={() => changeJokeMethodHandler(getJokeMethod.BySearch)}
            />
            <span className="joke-selector__category-description">Search</span>
          </p>
          <input
            type="text"
            placeholder="Free text search..."
            className={`joke-selector__search-input-field ${
              jokeGetMethod != getJokeMethod.BySearch ? "hidden" : ""
            }`}
            onChange={jokeRequestHandler}
          />
        </form>
        <button
          className="page__content_getJoke-btn"
          onClick={getJokeButtonHandler}
        >
          Get a joke
        </button>
        <div className="page__content_jeneratedJoke-cover">
          {jokes.map((joke, index) => (
            <JeneratedJoke jokeItem={joke} key={index} />
          ))}
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
