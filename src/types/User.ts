export type User = {
  email: string;
  name: string;
  bio: string;
  imageUrl: string;
  githubUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
};

export type EditableUserFields = Pick<
  User,
  "name" | "bio" | "githubUrl" | "linkedinUrl" | "twitterUrl"
>;
