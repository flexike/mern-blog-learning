import "./register.sass";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function Register(e) {
    e.preventDefault();
  }

  return (
    <section className="reg-section">
      <div className="container container-reg">
        <div className="reg-content">
          <h2>registration</h2>
          <form action="" autoComplete="off" onSubmit={Register}>
            <label htmlFor="username"></label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              type="text"
              placeholder="Create your username"
              required
            />
            <label htmlFor="email"></label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
            <label htmlFor="password"></label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              placeholder="Create your password"
              required
            />
            <button>Register</button>
          </form>
          <Link to="/login">Have an account? Login</Link>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Register;
