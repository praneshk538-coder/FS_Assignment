import React, { useRef } from "react";

function App() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Input Focus Task</h2>

      <input
        type="text"
        placeholder="Enter text"
        ref={inputRef}
      />

      <br /><br />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
}

export default App;