function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search starships..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;
