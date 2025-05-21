import React from "react";
import { useTodo } from "../contexts/TodoContext";
import { useLanguage } from "../contexts/LanguageContext";

function TodoInput() {
  const { inputValue, setInputValue, addTodo } = useTodo();
  const { t } = useLanguage();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="todo-input-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={t("taskPlaceholder")}
        className="todo-input"
      />
      <button onClick={addTodo} className="add-btn">
        <span className="plus-icon">+</span>
        <span>{t("addTodo")}</span>
      </button>
    </div>
  );
}

export default TodoInput;
