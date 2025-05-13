import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Profile = () => {
  const { user, logout } = useContext(AuthContext); // pega o usuário atual

  if (!user) return <p>User not authenticated.</p>;

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Welcome, {user.email}!</h2>
      <p>This is your personal profile.</p>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default Profile;
