import React from 'react';

export type ProfileFormData = {
  firstName: string;
  lastName: string;
  tg: string;
  email?: string;
  about?: string;
  avatar: string;
};

export interface ProfileInfoProps {
  setIsValid: React.Dispatch<
    React.SetStateAction<Record<keyof ProfileFormData, boolean>>
  >;
  onDataChange: (data: ProfileFormData) => void;
  initialData: ProfileFormData;
}
