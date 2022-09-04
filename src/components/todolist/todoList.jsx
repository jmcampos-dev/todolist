import React, { useContext } from "react";
import "../../css/todolist.css";
import Form from "./form.jsx";
import TodoItem from "./todoItem.jsx";
import ItemsContext from "../../ItemsContext.jsx";

export default function TodoList() {
  const { items } = useContext(ItemsContext);
  return (
    <section className="todolist">
      <div className="todolist-container">
        <h1>TodoList</h1>
        <div className="todoitems-container">
          {items.map((item) => (
            <TodoItem key={item.id} item={item} />
          ))}
        </div>
        <Form />
      </div>
    </section>
  );
}
