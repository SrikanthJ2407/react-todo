import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  // function to delete todo
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  //function to mark a todo complete
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      {/* logic to strikethrough when todo is complete */}
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}{" "}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
