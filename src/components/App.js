import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [toggle, setToggle] = useState(false)
  function Toggle() {
    setToggle(!toggle)
  }
  // const appClass = false ? "App dark" : "App light"

  return (
    <div className={toggle ? 'App dark' : 'App light'}>
      <header>
        <h2>Shopster</h2>
        <button onClick={Toggle}>{toggle ? 'App dark' : 'App light'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
