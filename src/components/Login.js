import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "axios";
import "./login.css";

const initialData = {
  username: "",
  password: "",
};

export default function Login() {
  const [user, setUser] = useState(initialData);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("login/endpoint", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.pushState("/");
      });
  };

  return (
    <div className="login-container">
      <span className="login-title">LOGIN</span>
      <form>
        <label className="login-label">
          USERNAME
          <br />
          <input type="text" onChange={handleChange} />
        </label>
        <br />
        <label className="login-label">
          PASSWORD
          <br />
          <input type="text" onChange={handleChange} />
        </label>
        <br />
        <button onClick={handleLogin}>SUBMIT</button>
      </form>
    </div>
  );
}
