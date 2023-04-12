import React, {useState} from "react";

function Item({ name, category, }) {
  const [inCart, setInCart] = useState(false)
  function wichael(){
    setInCart(!inCart)
  }

  return (
    <li className={!inCart ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={wichael}>{!inCart ? "add to cart" : "in-cart"}</button>
    </li>
  );
}

export default Item;
