import React from "react";
import UserContext from "./UserContext";
import Home from "./Home";

function App() {
  const username = "Pranesh";

  return (
    
    <UserContext.Provider value={username}>
      <Home />
    </UserContext.Provider>
  );
}

export default App;