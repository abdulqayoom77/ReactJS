import React, { useRef } from "react";
import { AUTH_CREDENTIALS } from "../constants/pass";

const Login = ({ onLogin }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const errorRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email === AUTH_CREDENTIALS.email && password === AUTH_CREDENTIALS.password) {
      localStorage.setItem("isAuthenticated", "true");
      onLogin(true);
    } else {
      errorRef.current.textContent = "Invalid email or password!";
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <p ref={errorRef} className="text-red-500 mb-4"></p>

        <input
          type="email"
          placeholder="Email"
          ref={emailRef}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
