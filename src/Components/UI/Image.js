import React from "react";
import "./Image.css";

export default function ({ image, description, visible = false }) {
  return (
    <div className="image">
      <img src={image} alt={description}></img>
      <p>{description}</p>
    </div>
  );
}
