import React from "react";
import "./JeneratedJoke.scss";

export function JeneratedJoke({ jokeItem }) {
  let updTime = () => {
    let currentdate = new Date();
    let datetime =
      currentdate.getFullYear() +
      "-" +
      ("0" + (currentdate.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + currentdate.getDate()).slice(-2) +
      " " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();

    let updHours = Math.floor(
      Math.abs(new Date(jokeItem.updated_at) - new Date(datetime)) / 3600000
    );
    return updHours;
  };

  updTime();

  return (
    <div className="jeneratedJoke__cover">
      <button className="jeneratedJoke__like-btn"></button>
      <div className="jeneratedJoke__content">
        <div className="jeneratedJoke__content_messege-icon"></div>
        <div className="jeneratedJoke__content_cover content-block">
          <span className="content-block__ID">
            ID:{" "}
            <a href={jokeItem.url} className="content-block__ID_link">
              {jokeItem.id}
            </a>
            <div className="content-block__ID_link-icon"></div>
          </span>
          <p className="content-block__joke">{jokeItem.value}</p>
          <div className="content-block__footer">
            <span className="content-block__footer_last-upd">
              Last update: {updTime()} hours ago
            </span>
            <div
              className={
                jokeItem.categories != 0 ? "content-block__footer_category" : ""
              }
            >
              {jokeItem.categories}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
