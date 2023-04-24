import React, { useState } from "react";

function Item({ name, category }) {
  const [addCart, setAddCart] = useState(true);
  function addCartHandler(e) {
    setAddCart((setAddCart) => !setAddCart);
  }
  return (
    <li className={addCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addCartHandler}>
        {addCart ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
