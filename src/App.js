import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
    // State
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filterTodos, setFilterTodos] = useState([]);

    // useEffect to filter todo
    useEffect(() => {
        getlocalTodos();
    }, []);
    useEffect(() => {
        filterHandler();
        savelocalTodos();
    }, [todos, status]);

    // Logic to filterTodo
    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilterTodos(todos.filter((todo) => todo.completed === true));
                break;
            case "uncompleted":
                setFilterTodos(todos.filter((todo) => todo.completed === false));
                break;
            default:
                setFilterTodos(todos);
                break;
        }
    };
    // saving in localStorage
    const savelocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const getlocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(
                localStorage.getItem("todos", JSON.stringify(todos))
            );
            setTodos(todoLocal);
        }
    };
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        h2 > My Todos < /h2>{" "} <
        Form inputText = { inputText }
        todos = { todos }
        setTodos = { setTodos }
        setInputText = { setInputText }
        setStatus = { setStatus }
        /> { /* setting the todos, setTodos for access  */ } { " " } <
        TodoList todos = { todos }
        setTodos = { setTodos }
        filterTodos = { filterTodos }
        />{" "} <
        /header>{" "} <
        /div>
    );
}
export default App;