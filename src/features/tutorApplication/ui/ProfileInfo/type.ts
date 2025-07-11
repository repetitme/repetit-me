export type ProfileFormData = {
  firstName: string;
  lastName: string;
  telegram: string;
  email?: string;
  about?: string;
  avatar: string;
};

export interface ProfileInfoProps {
  onDataChange: (data: ProfileFormData) => void;
}