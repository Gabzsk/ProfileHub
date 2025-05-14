import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

interface ProfileCardProps {
  name: string;
  email: string;
  bio: string;
  avatarUrl: string;
  githubUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

const ProfileCard = ({
  name,
  email,
  bio,
  avatarUrl,
  githubUrl,
  linkedinUrl,
  twitterUrl,
}: ProfileCardProps) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="profile-card">
      <img src={avatarUrl} alt={name} className="profile-avatar" />
      <h2>{name}</h2>
      <p className="profile-email">{email}</p>
      <p className="profile-bio">{bio}</p>
      <div className="profile-socials">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        )}
        {linkedinUrl && (
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        )}
        {twitterUrl && (
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
        )}
      </div>
      <button className="logout-btn" onClick={handleLogOut}>
        LOGOUT
      </button>
    </div>
  );
};

export default ProfileCard;
