import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useLogout } from "../../hooks/useLogout";
import "./Profile.css";
import ProfileCard from "../../components/ProfileCard";

const Profile = () => {
  const { user } = useContext(AuthContext); // pega o usuário atual
  const logout = useLogout();

  if (!user) return <p>User not authenticated.</p>;

  return (
    <div className="main-component">
      <ProfileCard
        name={"Gabriel Nobre Modesto"}
        email={"nobremodestocontato@gmail.com"}
        bio={"FrontEnd Dev"}
        avatarUrl={"https://i.pravatar.cc/150?img=8"}
        githubUrl="https://github.com/Gabzsk"
        linkedinUrl="https://www.linkedin.com/in/gabrielmodesto/"
        twitterUrl="https://x.com/Gabiziski"
      />
    </div>
  );
};

export default Profile;
