import "./index.css";
import { Link } from "react-router-dom";
import React from 'react';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
        <p style={{ display: "inline-block" }}>歡迎使用TodoList</p>
      </header>
      <Link  to={"/list"} > 前往List</Link>
    </div>
  );
};
export default Home;
