import styles from "./App.module.css";
import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/movie" element={<Detail></Detail>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
