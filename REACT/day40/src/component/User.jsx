import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(data => setUsers(data.users));
  }, []);

  return (
    <>
      <h2>Users</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {users.slice(0, 6).map(user => (
          <div
            key={user.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              width: "200px",
              borderRadius: "10px"
            }}
          >
            <h4>{user.firstName} {user.lastName}</h4>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Users;