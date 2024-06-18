import "./App.css";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const namesRecord = ["Smith", "Peter", "Hendry"];
  return (
    <>
      <TodoList dataList={namesRecord} />
    </>
  );
}

export default App;
