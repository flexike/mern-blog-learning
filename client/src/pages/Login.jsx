import "./login.sass";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";

const Login = () => {
  return (
    <section className="login-section">
      <div className="container container-login">
        <div className="login-content">
          <h2>Login</h2>
          <form action="" autoComplete="off">
            <input
              type="username"
              placeholder="Username"
              name="username"
              required
            />
            <input
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
