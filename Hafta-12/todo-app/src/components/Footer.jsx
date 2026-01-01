function Footer({ itemsLeft, filter, setFilter, clearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong> items left
      </span>

      <ul className="filters">
        {["all", "active", "completed"].map((f) => (
          <li key={f}>
            <a
              className={filter === f ? "selected" : ""}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
