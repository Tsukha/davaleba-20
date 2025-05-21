import React from "react";
import { TodoProvider } from "./contexts/TodoContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <LanguageProvider>
      <TodoProvider>
        <div className="app-container">
          <Header />
          <main className="main-container">
            <TodoContainer />
          </main>
        </div>
      </TodoProvider>
    </LanguageProvider>
  );
}

export default App;
