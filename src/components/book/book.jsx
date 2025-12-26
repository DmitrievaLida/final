import React from "react";
import "./Book.css";

const Book = ({ image, author, title, description }) => {
  return (
    <div className="book">
     <div className="book__image-wrapper">
  <img src={image} alt={title} className="book__image" />
</div>
      <ul className="book__info">
        <li className="book__author">{author}</li>
        <li className="book__title">{title}</li>
        <li className="book__description">{description}</li>
      </ul>
    </div>
  );
};

export default Book;