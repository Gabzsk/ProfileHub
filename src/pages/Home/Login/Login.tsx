import "./Login.css";

function Login() {
  return (
    <div className="form-component">
      <form action="">
        <div className="form-inputs">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="form-button">
          <button className="login-btn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
