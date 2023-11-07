import React from "react";
import "./menu.css";

export default function Menu() {
  return (
    <>
      <header>
        <span className="title">FRIENDS DATABASE</span>
        <nav>
          <ul>
            <a>
              <li>LOGIN.</li>
            </a>
            <a>
              <li>FRIENDLIST.</li>
            </a>
            <a>
              <li>ADDFRIEND.</li>
            </a>
            <a>
              <li>LOGOUT</li>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
}
