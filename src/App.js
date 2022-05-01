import { Route, Routes, BrowserRouter, } from "react-router-dom";
import List from "./components/List";
import Home from "./Home";
import React from 'react';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
    </Routes>   
  </BrowserRouter>
  );
}

export default App;
