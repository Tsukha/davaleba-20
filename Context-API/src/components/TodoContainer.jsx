import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoContainer() {
  return (
    <div className="todo-container">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default TodoContainer;
