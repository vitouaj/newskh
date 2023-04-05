"use client";

import React from "react";
import axios from "axios";
import AdminPanel from "./AdminPanel";
import UpdateNews from "./updatePanel";
import { Navbar } from "../utils/navbar";

export default function LoginForm() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [islogin, setLogin] = React.useState(false);

  async function login(e) {
    e.preventDefault();
    const data = {
      email: username,
      password: password,
    };
    axios({
      method: "post",
      url: "http://localhost:8080/api/v1/auth/login",
      data: data,
    })
      .then((res) => {
        localStorage.setItem("authorization", res.data.token);
        setLogin(true);
      })
      .catch((e) => console.error(e));
  }

  return (
    <body className="mx-auto w-4/5">
      <Navbar />
      {!islogin ? (
        <div className="w-full max-w-xs mx-auto my-20">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="email"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="******************"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={login}
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>
      ) : (
        <div className="w-full mx-auto">
          <AdminPanel login={islogin} />
        </div>
      )}
    </body>
  );
}
