import "./App.css";
import { ItemProvider } from "./ItemsContext.jsx";
import DisplayDate from "./components/date/date.jsx";
import TodoList from "./components/todolist/todoList.jsx";
import CopyRight from "./components/copyright/copyright.jsx";

function App() {
  return (
    <div className="App">
      <ItemProvider>
        <DisplayDate />
        <TodoList />
        <CopyRight />
      </ItemProvider>
    </div>
  );
}

export default App;
