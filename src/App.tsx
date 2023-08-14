import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Learn from "./components/pages/Learn";
import Login from "./components/pages/Login";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/learn" element={<Learn></Learn>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
