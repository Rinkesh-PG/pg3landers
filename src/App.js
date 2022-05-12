import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import About from "./pages/About";
import Home from "./pages/Home";
import Wallet from './pages/Wallet';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/wallet" element={<Wallet />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
