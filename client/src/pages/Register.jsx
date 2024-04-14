import "./register.sass";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";

const Register = () => {
  return (
    <section className="reg-section">
      <div className="container container-reg">
        <div className="reg-content">
          <h2>registration</h2>
          <form action="" autoComplete="off">
            <label htmlFor="username"></label>
            <input
              name="username"
              type="text"
              placeholder="Create your username"
              required
            />
            <label htmlFor="email"></label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
            <label htmlFor="password"></label>
            <input
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
