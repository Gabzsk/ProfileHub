import "./Login.css";
import { useState } from "react";

function Login() {
  // STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    setIsLoading(true);
    setError("");

    // Login Simulation
    setTimeout(() => {
      if (email === "admin@test.com" && password === "admin") {
        alert("Login sucessful!");
      } else {
        setError("Invalid email or password.");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="form-component">
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
  );
}

export default Login;
