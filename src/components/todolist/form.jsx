import React, { useState, useContext } from "react";
import "../../css/form.css";
import ItemsContext from "../../ItemsContext.jsx";
import { v4 as uuidv4 } from "uuid";

export default function Form() {
  const { addItem } = useContext(ItemsContext);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (inputValue) {
      addItem({ id: uuidv4(), text: inputValue, checked: false });
      setInputValue("");
    } else {
      console.log("vacio");
    }
  };
  return (
    <form className="form-container" onSubmit={(e) => handleForm(e)}>
      <div className="button-container">
        <h2>Añadir</h2>
        <button>
          <svg
            className="add-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <title>Add</title>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="20"
              d="M256 112v288M400 256H112"
            />
          </svg>
        </button>
      </div>
      <input type="text" value={inputValue} onChange={(e) => handleInput(e)} />
    </form>
  );
}
