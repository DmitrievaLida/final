import { useState } from "react";

import "./universalBlock.css";
import Book from "../book/book.jsx";
function universalBlock({title,content}) {
  

  return (
   <div className="universal-container">
    <h1>{title}</h1>
    <div className="books-container">
        {content}
    </div>
   </div>
  );
}

export default universalBlock;