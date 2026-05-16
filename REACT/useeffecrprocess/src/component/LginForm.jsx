import React, { useState } from "react";

function LoginForm() {

  // Store email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function when button is clicked
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Login Successful");

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      
      <form
        onSubmit={handleSubmit}
        style={{
          border: "1px solid black",
          padding: "20px",
          width: "300px",
          margin: "auto",
        }}
      >
        <h2>Login Form</h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "90%", padding: "10px", margin: "10px" }}
        />

        <br />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "90%", padding: "10px", margin: "10px" }}
        />

        <br />

        {/* Login Button */}
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;