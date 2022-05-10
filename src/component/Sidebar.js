import React from "react";

export default function Sidebar(Props) {
  return (
    <aside className="block ">
      <h1>Catagories</h1>
      <div className="contentbox ">
        <div className="textflow">
          <li>
            {" "}
            <a href="#/vegetables">Vegetables</a>
          </li>
          <li>
            {" "}
            <a href="#/fruits">Fruits</a>
          </li>
          <li>
            {" "}
            <a href="#/cheese">Cheese</a>
          </li>
        </div>
      </div>
    </aside>
  );
}
