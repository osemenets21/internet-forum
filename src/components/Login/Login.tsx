import React, { useContext, useState } from "react";
import "./Login.scss";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(UserContext);
  const { redirect, setRedirect } = useContext(UserContext);

  const checkLogInData = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      if (!res.ok) throw new Error("Something went wrong");

      const { token } = await res.json();
      setToken(token);

      setRedirect(true);
    } catch (error) {
      console.error(error);
      alert("Wrong password or username");
    }
  };

  const isFormValid = email.length > 0 && password.length > 0;

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <form className="login-form" onSubmit={checkLogInData}>
      <label htmlFor="email-input">User name</label>
      <input
        name="email"
        type="text"
        id="email-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password-input">Password</label>
      <input
        name="password"
        type="password"
        id="password-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" disabled={!isFormValid}>
        Log in
      </button>
    </form>
  );
};
