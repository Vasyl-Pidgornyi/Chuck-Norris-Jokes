import React from "react";
import ReactDOM from "react-dom";
// import { JeneratedJoke } from "./components/JeneratedJoke/JeneratedJoke.jsx";

class App extends React.Component {
  render() {
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
              />
              <span className="joke-selector__category-description">
                Random
              </span>
            </p>
            <p>
              <input
                type="radio"
                name="jokeRadioSelector"
                className="joke-selector__category-selection"
              />
              <span className="joke-selector__category-description">
                From caterogies
              </span>
            </p>
            <div className="joke-selector__subcategory">
              <button className="joke-selector__subcategory_btn">animal</button>
              <button className="joke-selector__subcategory_btn">career</button>
              <button className="joke-selector__subcategory_btn">
                selebrity
              </button>
              <button className="joke-selector__subcategory_btn">dev</button>
            </div>
            <p>
              <input
                type="radio"
                name="jokeRadioSelector"
                className="joke-selector__category-selection"
              />
              <span className="joke-selector__category-description">
                Search
              </span>
            </p>
          </form>
          <button className="page__content_getJoke-btn">Get a joke</button>
          <div className="page__content_jeneratedJoke-cover">
            {/* <JeneratedJoke /> */}
          </div>
        </div>
        <div className="page__favorites">
          <h3 className="page__favorites_header">Favourite</h3>
        </div>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".page"));
