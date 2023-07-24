import React from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function Layout() {
  return (
    <div>
      <h1>Layout</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default Layout;
