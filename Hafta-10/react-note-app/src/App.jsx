import './App.css';
import SearchInput from "./components/SearchInput";
import Input from "./components/Input";
import NoteList from "./components/NoteList";

function App() {

  return (
    <div className='App'>
      <h1>NoteApp</h1>
      <SearchInput/>
      <Input />
      <div className="note-list">
          <NoteList/>
      </div>
    </div>
  )
}

export default App