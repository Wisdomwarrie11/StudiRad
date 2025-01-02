// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Navbar";

function App() {
  return (
    
    <Router>
       <Navbar />
      <Routes>     
        <Route path="/" element={<Home />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
