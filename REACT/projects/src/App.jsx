import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import "./App.css";

function App() {
  const [topic, setTopic] = useState("html");

  return (
    <div className="app">
      <Sidebar setTopic={setTopic} />
      <Content topic={topic} />
    </div>
  );
}

export default App;