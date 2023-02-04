import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import React from "react";
import Header from "./components/Header";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

export default App;
