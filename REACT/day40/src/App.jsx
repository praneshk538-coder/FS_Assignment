import React from "react";
import Todos from "./components/Todos";
import Recipes from "./components/Recipes";
import Users from "./components/Users";
import Timer from "./components/Timer";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Timer />
      <Todos />
      <Recipes />
      <Users />
    </div>
  );
}

export default App;