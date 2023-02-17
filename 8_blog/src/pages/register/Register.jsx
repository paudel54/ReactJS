import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <form className="registerForm">
        <span className="registerTitle">Register</span>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Username"
        />

        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your Email"
        />

        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter Your Password"
        ></input>
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
}
