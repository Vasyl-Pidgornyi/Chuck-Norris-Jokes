import React from "react";
import "./FavoriteJoke.scss";

export function FavoriteJoke() {
  return (
    <div className="favoriteJoke__cover">
      <button className="favoriteJoke__like-btn"></button>
      <div className="jeneratedJoke__content">
        <div className="favoriteJoke__content_messege-icon"></div>
        <div className="jeneratedJoke__content_cover content-block">
          <span className="content-block__ID">
            ID:{" "}
            <a href="#" className="content-block__ID_link">
              XNaAxUduSw6zANDaIEab7A
            </a>
            <div className="content-block__ID_link-icon"></div>
          </span>
          <p className="content-block__favorite-joke">
            No one truly knows who's Chuck Norris' real father. No one is
            biologically strong enough for this. He must've conceived himself.
          </p>
          <div className="content-block__footer">
            <span className="content-block__footer_last-upd">
              Last update: 1923 hours ago
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
