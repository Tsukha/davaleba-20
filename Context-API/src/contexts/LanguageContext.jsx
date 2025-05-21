import React, { createContext, useState, useContext } from "react";

export const translations = {
  en: {
    appTitle: "To-Do List",
    addTodo: "Add Task",
    taskPlaceholder: "Enter a new task...",
    noTasks: "No tasks yet. Add one above!",
    completed: "Completed",
    pending: "Pending",
    delete: "Delete",
    language: "Language",
  },
  ka: {
    appTitle: "დავალებების სია",
    addTodo: "დამატება",
    taskPlaceholder: "შეიყვანეთ ახალი დავალება...",
    noTasks: "დავალება ჯერ არ არის დამატებული. დაამატეთ ზემოთ!",
    completed: "დასრულებული",
    pending: "მიმდინარე",
    delete: "წაშლა",
    language: "ენა",
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ka" : "en");
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
