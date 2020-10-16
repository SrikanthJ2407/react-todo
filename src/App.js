import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // this is the state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>My Todos</h2>
        <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
        />
         {/* setting the todos, setTodos for access  */}
        <TodoList todos={todos} setTodos={setTodos} />
      </header>
    </div>
  );
}
export default App;
