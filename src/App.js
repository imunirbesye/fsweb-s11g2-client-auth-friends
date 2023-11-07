import React from "react";
import Link, { axiosWithAuth } from "axios";

import "./App.css";
import Menu from "./components/Menu";
import Login from "./components/Login";

function App() {
  return (
    <>
      <header>
        <span className="title">FRIENDS DATABASE</span>
        <nav>
          <ul>
            <a>
              <li>
                <Link to="/login">LOGIN.</Link>
              </li>
            </a>
            <a>
              <li>
                <Link to="/friends">FRIENDLIST.</Link>
              </li>
            </a>
            <a>
              <li>
                <Link to="/friends">ADDFRIEND.</Link>
              </li>
            </a>
            <a>
              <li>
                <Link to="/logout">LOGOUT</Link>
              </li>
            </a>
          </ul>
        </nav>
      </header>
      <Login />
    </>
  );
}

export default App;
