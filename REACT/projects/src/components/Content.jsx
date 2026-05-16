import React from "react";
import tutorials from "../data/tutorials";

const Content = ({ topic }) => {
  const data = tutorials[topic];

  return (
    <div className="content">
      <h1>{data.title}</h1>
      <pre>{data.content}</pre>
    </div>
  );
};

export default Content;