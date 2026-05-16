import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Uppercase Converter</h1>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Display Uppercase */}
      <h2>{text.toUpperCase()}</h2>
    </div>
  );
}

export default App;