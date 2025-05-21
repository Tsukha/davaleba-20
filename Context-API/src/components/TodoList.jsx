import React from "react";
import TodoItem from "./TodoItem";
import { useTodo } from "../contexts/TodoContext";
import { useLanguage } from "../contexts/LanguageContext";

function TodoList() {
  const { todos } = useTodo();
  const { t } = useLanguage();

  return (
    <div className="todo-list-container">
      {todos.length === 0 ? (
        <p className="no-tasks">{t("noTasks")}</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
