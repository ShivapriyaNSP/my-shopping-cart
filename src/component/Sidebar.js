import React from "react";

import { Link } from "react-router-dom";

export default function Sidebar(Props) {
  return (
    <aside className="block ">
      <h1>Catagories</h1>
      <div className="contentbox ">
        <div className="textflow">
          <li>
            {" "}
            <Link to="/vegetables">Vegetables</Link>
          </li>
          <li>
            {" "}
            <Link to="/fruits">Fruits</Link>
          </li>
          <li>
            {" "}
            <Link to="/cheese">Cheese</Link>
          </li>
        </div>
      </div>
    </aside>
  );
}
