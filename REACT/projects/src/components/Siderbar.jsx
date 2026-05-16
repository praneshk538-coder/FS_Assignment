import React from "react";
import Sidebar from "./components/Sidebar";


const Sidebar = ({ setTopic }) => {
  return (
    <div className="sidebar">
      <h2>FutureDev</h2>
      <button onClick={() => setTopic("html")}>HTML</button>
      <button onClick={() => setTopic("css")}>CSS</button>
      <button onClick={() => setTopic("javascript")}>JavaScript</button>
      <button onClick={() => setTopic("react")}>React</button>
      <button onClick={() => setTopic("mysql")}>MySQL</button>
    </div>
  );
};

export default Sidebar;