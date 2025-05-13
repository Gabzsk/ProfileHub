import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  // STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Fill in all fields.");
      return;
    }

    // Login Simulation
    setTimeout(() => {
      if (email === "admin@test.com" && password === "admin") {
        navigate("/profile");
      } else {
        setError("Invalid email or password.");
      }
      setIsLoading(false);
    }, 1000);

    setIsLoading(true);
    setError("");
  };

  return (
    <div className="main-container">
      <div className="form-component">
        <h2>Sign in to ProfileHub</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-inputs">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>
            )}
          </div>
          <div className="form-button">
            <button className="login-btn" type="submit" disabled={isLoading}>
              {isLoading ? "Entering..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
