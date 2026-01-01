import { useState } from "react";

function Header({ addTodo }) {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={submit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </header>
  );
}

export default Header;
