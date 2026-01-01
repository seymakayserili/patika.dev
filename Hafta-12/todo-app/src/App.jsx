import { useState, useEffect } from "react";

import "./App.css";

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import Info from "./components/Info";

function App() {
  const [todos, setTodos] = useState(() => {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [
    { id: 1, text: "Learn JavaScript", completed: true },
    { id: 2, text: "Learn React", completed: false },
    { id: 3, text: "Have a life!", completed: false },
  ];
});

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);


  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((t) => !t.completed));
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const itemsLeft = todos.filter((t) => !t.completed).length;

  return (
    <>
      <section className="todoapp">
        <Header addTodo={addTodo} />
        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        <Footer
          itemsLeft={itemsLeft}
          filter={filter}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
        />
      </section>

      <Info />
    </>
  );
}

export default App;
