import "./login.sass";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function login(e) {
    e.preventDefault();
  }

  return (
    <section className="login-section">
      <div className="container container-login">
        <div className="login-content">
          <h2>Login</h2>
          <form action="" autoComplete="off" onSubmit={login}>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              name="username"
              required
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <button>LOG IN</button>
          </form>
          <Link to="/register">Dont have an account? Register</Link>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Login;
