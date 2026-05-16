import React, { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then(res => res.json())
      .then(data => setTodos(data.todos));
  }, []);

  return (
    <>
      <h2>Todos Table</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Todo</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.todo}</td>
              <td>{item.completed ? " Done" : "Pending"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Todos;