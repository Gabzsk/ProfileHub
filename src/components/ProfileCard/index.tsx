import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { type User } from "../../types/User";

interface ProfileCardProps {
  user: User; // cria a props user, que recebe um objeto do tipo types/User.ts
}

const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <div className="profile-card">
      <img src={user.imageUrl} alt={user.name} className="profile-avatar" />
      <h2>{user.name}</h2>
      <p className="profile-email">{user.email}</p>
      <p className="profile-bio">{user.bio}</p>
      <div className="profile-socials">
        {user.githubUrl && (
          <a href={user.githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        )}
        {user.linkedinUrl && (
          <a href={user.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        )}
        {user.twitterUrl && (
          <a href={user.twitterUrl} target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
