import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import React from "react";
import Header from "./components/Header";
import useFetch from "./hooks/useFetch";
const App = () => {
  const { data } = useFetch("http://localhost:5000/");
  console.log(data);
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

export default App;
