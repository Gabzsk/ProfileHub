import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./Profile.css";
import ProfileCard from "../../components/ProfileCard";
import EditProfileForm from "../../components/EditProfileForm";

const Profile = () => {
  const { user, logout, updateUser } = useContext(AuthContext); // pega o usuário atual do Context (no qual é pego em types/User.ts)
  const [isEditing, setIsEditing] = useState(false); // Controla se o formulário está visível

  if (!user) return <p>User not authenticated.</p>; // se não estiver logado

  // <div className="main-component">
  //   {!isEditing ? (
  //     <>
  //       <ProfileCard user={user} />
  //       <div className="profile-buttons">
  //         <button className="logout-btn" onClick={logout}>
  //           Logout
  //         </button>
  //         <button className="edit-btn" onClick={() => setIsEditing(true)}>
  //           Edit Profile
  //         </button>
  //       </div>
  //     </>
  //   ) : (
  //     <EditProfileForm
  //       user={user}
  //       onCancel={() => setIsEditing(false)}
  //       onSave={updateUser}
  //     />
  //   )}
  // </div>

  return (
    <div className="profile-page">
      <ProfileCard user={user} />

      <div className="profile-buttons">
        <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
        <button className="logout-btn">Logout</button>
      </div>

      {isEditing && (
        <EditProfileForm
          user={user}
          onSave={(updatedData) => {
            updateUser(updatedData);
            setIsEditing(false);
          }}
        />
      )}
    </div>
  );
};

export default Profile;
