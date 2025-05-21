import React from "react";
import { useTodo } from "../contexts/TodoContext";
import { useLanguage } from "../contexts/LanguageContext";

function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo } = useTodo();
  const { t } = useLanguage();

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-content">
        <button
          onClick={() => toggleTodo(todo.id)}
          className={`todo-checkbox ${todo.completed ? "checked" : ""}`}
        >
          {todo.completed && <span className="check-mark">✓</span>}
        </button>
        <span className="todo-text">{todo.text}</span>
      </div>
      <div className="todo-actions">
        <span className="todo-status">
          {todo.completed ? t("completed") : t("pending")}
        </span>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="delete-btn"
          aria-label={t("delete")}
        >
          <span className="trash-icon">🗑️</span>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
