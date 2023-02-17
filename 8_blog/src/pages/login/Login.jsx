import "./login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="login">
      <form className="loginForm">
        <span className="loginTitle">Login</span>
        <label> Email </label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your Email..."
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="loginButton">Login</button>
        <button className="loginRegisterButton">
          <Link to="/register">Register</Link>
        </button>
      </form>
    </div>
  );
}
