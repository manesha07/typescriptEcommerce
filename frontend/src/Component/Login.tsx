import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import * as notify from "../utils/notify";
import * as Sentry from "@sentry/react";
import { LoginResponse } from "src/typedeclaration";

// This component is login for admin
const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => response.json())
      .then((data: LoginResponse) => {
        // if token is received then the login is successful otherwise error is thrown
        if ("data" in data) {
          if (data.data.token) {
            localStorage.setItem("user", JSON.stringify(data.data.user));
            localStorage.setItem("token", JSON.stringify(data.data.token));
            notify.success("Login");
            navigate("/");
            window.location.reload();
          }
        } else {
          console.log("login admin", data);
          notify.error(data.details);
        }
      })
      .catch((error) => {
        notify.error(error);

        Sentry.captureException(error);
      });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="login shadow-xl mx-auto w-[300px]  p-[30px] mt-[40px] rounded-md"
      >
        <h1 className="text-[30px] text-center mb-[20px]">Login</h1>
        <label htmlFor="username" className="text-gray-600">
          Username
        </label>
        <input
          data-testid="login-user"
          type="text"
          value={username}
          placeholder="Enter Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="shadow-md p-[5px] w-full mb-[20px] mt-[10px] rounded-md"
        />
        <label htmlFor="password" className="text-gray-600">
          Password
        </label>
        <input
          type="password"
          data-testid="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="shadow-md p-[5px] w-full mb-[20px] mt-[10px] rounded-md"
        />
        <Link to="#">
          <p className="text-blue-300 mt-[-15px] mb-[10px]">Forgot Password?</p>
        </Link>
        <button
          data-testid="submit"
          className="shadow-md p-[5px] w-full mb-[20px] mt-[10px] text-white rounded-md bg-green-600"
        >
          LOGIN
        </button>
      </form>
      <ToastContainer autoClose={4000} />
    </>
  );
};

export default Sentry.withProfiler(Login);
