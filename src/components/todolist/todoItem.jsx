import React, { useContext } from "react";
import ItemsContext from "../../ItemsContext.jsx";

import "../../css/todoitem.css";

export default function TodoItem({ item }) {
  const { changeChecked, delItem } = useContext(ItemsContext);

  const handleChecked = () => {
    changeChecked(item.id);
  };
  const handleCross = () => {
    delItem(item.id);
  };
  return (
    <div
      className={
        item.checked ? "todoitem-container checked" : "todoitem-container"
      }
    >
      <div onClick={handleChecked} className="todoitem">
        <p>{item.text}</p>
      </div>
      <div onClick={handleCross}>
        <svg
          className="cross-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
    </div>
  );
}
