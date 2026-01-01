import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StarshipDetail from "./pages/StarshipDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starship/:id" element={<StarshipDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
