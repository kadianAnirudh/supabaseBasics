import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import React  from 'react';


const Navbar = () => {
  return (
    <div>
      <nav>
        <h1>Supa Smoothies</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Smoothie</Link>
      </nav>
    </div>
  )
}

export default Navbar