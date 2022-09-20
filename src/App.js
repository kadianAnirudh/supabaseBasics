import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home.js"
import Create from "./pages/Create.js"
import Update from "./pages/Update.js"
import Navbar from './pages/Navbar.js';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
