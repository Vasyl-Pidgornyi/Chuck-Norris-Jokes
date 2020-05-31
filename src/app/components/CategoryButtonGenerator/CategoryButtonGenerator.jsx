import React from "react";
import "./CategoryButtonGenerator.scss";

export function CategoryButtonGenerator({ item }) {
  return (
    <button className="joke-selector__subcategory_btn">{item.category}</button>
  );
}
