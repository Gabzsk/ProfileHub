import { useState } from "react";
import { type EditableUserFields, type User } from "../types/User";
import "./EditProfileForm.css";

type EditProfileFormProps = {
  user: User;
  onSave: (updatedData: EditableUserFields) => void;
};

const EditProfileForm = ({ user, onSave }: EditProfileFormProps) => {
  const [formData, setFormData] = useState<EditableUserFields>({
    name: user.name,
    bio: user.bio,
    githubUrl: user.githubUrl || "",
    linkedinUrl: user.linkedinUrl || "",
    twitterUrl: user.twitterUrl || "",
  });

  // Atualiza os campos à medida que o usuário digita
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target; // Extrai o name e value do input que está sendo alterado (editando bio? name = bio, value = novo texto digitado)
    setFormData((prev) => ({ ...prev, [name]: value })); // Copia os campos antigos, atualizando apenas o campo que foi alterado (do nam e evalue target acima)
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData); // Atualiza o usuário com novos dados
  };

  return (
    <form onSubmit={handleSubmit} className="edit-profile-form">
      <h3>Edit your Profile info</h3>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <textarea
        name="bio"
        value={formData.bio}
        onChange={handleChange}
        placeholder="Bio..."
      ></textarea>
      <input
        type="url"
        name="githubUrl"
        value={formData.githubUrl}
        onChange={handleChange}
        placeholder="GitHub URL"
      />
      <input
        type="url"
        name="linkedinUrl"
        value={formData.linkedinUrl}
        onChange={handleChange}
        placeholder="LinkedIn URL"
      />
      <input
        type="url"
        name="twitterUrl"
        value={formData.twitterUrl}
        onChange={handleChange}
        placeholder="Twitter/X URL"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditProfileForm;
