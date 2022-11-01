import React, { useState } from "react";

function Item({ name, category }) {

  const [isIn, setIsIn] = useState(false)
  const liClass = isIn ? "in-cart" : null
  function handleAddOrDelete(){

    setIsIn(isIn => !isIn)

  }

  return (
    <li className= {liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {handleAddOrDelete}>{isIn ? "Remove From Cart" :"Add to Cart" }</button>
    </li>
  );
}

export default Item;
