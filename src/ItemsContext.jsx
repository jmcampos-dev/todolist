import { createContext, useState } from "react";

const ItemsContext = createContext();

export function ItemProvider({ children }) {
  const [items, setItems] = useState(
    window.localStorage.getItem("tasks")
      ? JSON.parse(window.localStorage.getItem("tasks"))
      : []
  );

  const addItem = (item) => {
    const listaActualizada = [...items, item];
    setItems(listaActualizada);
    window.localStorage.setItem("tasks", JSON.stringify(listaActualizada));
  };
  const delItem = (id) => {
    const listaActualizada = items.filter((item) => id !== item.id);
    setItems(listaActualizada);
    window.localStorage.setItem("tasks", JSON.stringify(listaActualizada));
  };
  const changeChecked = (id) => {
    const listaActualizada = items.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setItems(listaActualizada);

    window.localStorage.setItem("tasks", JSON.stringify(items));
  };
  return (
    <ItemsContext.Provider value={{ items, addItem, changeChecked, delItem }}>
      {children}
    </ItemsContext.Provider>
  );
}

export default ItemsContext;
