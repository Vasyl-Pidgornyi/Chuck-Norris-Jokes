import React, { useState, useEffect, Component } from "react";

export class Requests extends Component {
  //   const [error, setError] = useState(false);
  //   const [isLoaded, setIsLoaded] = useState(false);
  //   const [item, setItem] = useState();

  static async getRandomeJoke() {
    let joke;
    await fetch("https://api.chucknorris.io/jokes/random")
      .then((result) => result.json())
      .then(
        (result) => {
          joke = result;
          //   setItem(result);
          //   this.setState({ joke: result });
          console.log(result);
          //   setIsLoaded(true);
        }

        // (error) => {
        //   setIsLoaded(true);
        //   setError(error);
        // }
      );
    return joke;
  }

  static async getCategoryJoke(selectedCategory) {
    let joke;
    await fetch(
      "https://api.chucknorris.io/jokes/random?category=" + selectedCategory
    )
      .then((result) => result.json())
      .then(
        (result) => {
          joke = result;
          //   this.setState({ joke: result });
          console.log(result);
          //   setItem(result);
          //   setIsLoaded(true);
        }

        // (error) => {
        //   setIsLoaded(true);
        //   setError(error);
        // }
      );
    return joke;
  }

  static async getSearchJoke(searchRequest) {
    let jokeList;
    await fetch(
      "https://api.chucknorris.io/jokes/search?query=" + searchRequest
    )
      .then((result) => result.json())
      .then(
        (result) => {
          jokeList = result;
          console.log(result);
          //   setItem(result);
          //   setIsLoaded(true);
        }

        // (error) => {
        //   setIsLoaded(true);
        //   setError(error);
        // }
      );
    return jokeList;
  }
}
