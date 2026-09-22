import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    const fakeSession = btoa(
      JSON.stringify({
        token: "abc123",
        userId: username,
        expiresAt: Date.now() + 3600000,
      }),
    );
    localStorage.setItem("session", fakeSession);
    alert(`Logged in as ${username}`);
  };

  return (
    <div className="login-card">
      <div className="login-header">
        <span className="login-mark" aria-hidden="true">
          ID
        </span>
        <div>
          <p className="login-eyebrow">Identity module</p>
          <h2>Welcome back</h2>
        </div>
      </div>
      <p className="login-description">
        Sign in to continue to your workspace.
      </p>
      <form
        className="login-form"
        onSubmit={(event) => {
          event.preventDefault();
          handleLogin();
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          required
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
