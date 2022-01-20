import React from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { email, password };
    handleLogin(payload);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          value={password}
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
export { Login };
