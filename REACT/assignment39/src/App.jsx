import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Email Input Example</h1>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Display using ternary */}
      <h2>
        {email === "" ? "Enter Email" : email}
      </h2>
    </div>
  );
}

export default App;