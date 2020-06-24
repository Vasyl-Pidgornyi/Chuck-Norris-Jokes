import React from "react";
import "./JeneratedJoke.scss";

export function JeneratedJoke({ jokeItem }) {
  return (
    <div className="jeneratedJoke__cover">
      <button className="jeneratedJoke__like-btn"></button>
      <div className="jeneratedJoke__content">
        <div className="jeneratedJoke__content_messege-icon"></div>
        <div className="jeneratedJoke__content_cover content-block">
          <span className="content-block__ID">
            ID: {jokeItem.id}
            <a href={jokeItem.url} className="content-block__ID_link"></a>
            <div className="content-block__ID_link-icon"></div>
          </span>
          <p className="content-block__joke">{jokeItem.value}</p>
          <div className="content-block__footer">
            <span className="content-block__footer_last-upd">
              Last update: {jokeItem.updated_at}
            </span>
            <div className="content-block__footer_category">
              {jokeItem.categories}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
