import React, { useState } from "react";
import StatusMessage from "./StatusMessage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login / Logout Toggle</h1>

      {/* Button */}
      <button onClick={toggleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {/* Display Message */}
      <StatusMessage isLoggedIn={isLoggedIn} />
    </div>
    <StatusMessage/>
    </>
    
  );
}

export default App;