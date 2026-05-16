import React from "react";

function StatusMessage({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome User! </h2>
      ) : (
        <h2>Please Login </h2>
      )}
    </div>
  );
}

export default StatusMessage;