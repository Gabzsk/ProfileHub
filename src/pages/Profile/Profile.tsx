import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Welcome to your Profile page!</h2>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default Profile;
