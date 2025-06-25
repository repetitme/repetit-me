import { useState } from 'react';

import Button from '../../../../shared/ui/button';
import Input from '../../../../shared/ui/input';
import Textarea from '../../../../shared/ui/textarea';
import Wrapper from '../../../../shared/ui/wrapper';
import AvatarUploadModal from '../AvatarUploadModal';
import AvatarWrapper from '../AvatarWrapper';

import styles from './index.module.scss';

type ProfileFormData = {
  firstName: string;
  lastName: string;
  telegram: string;
  email: string;
  about?: string;
  avatar: File | string;
};

const ProfileInfo = () => {
  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: '',
    lastName: '',
    telegram: '',
    email: '',
    about: '',
    avatar: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAvatarUpload = (file: File) => {
    // Можно сразу создать preview:
    const reader = new FileReader();
    reader.onload = (e) => {
      setFormData((prev) => ({ ...prev, avatar: e.target?.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange =
    (field: keyof Omit<ProfileFormData, 'avatar'>) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value
      }));
    };

  return (
    <Wrapper large className={styles.wrapper}>
      <div className={styles.form}>
        <div className={styles.form__avatar}>
          <AvatarWrapper
            avatarUrl={
              typeof formData.avatar === 'string' ? formData.avatar : undefined
            }
          />
          <Button
            text="Загрузить фотографию"
            variant="underline"
            onClick={() => setIsModalOpen(true)}
          />
          {isModalOpen && (
            <AvatarUploadModal
              onClose={() => setIsModalOpen(false)}
              onUpload={handleAvatarUpload}
            />
          )}
        </div>
        <div className={styles.form__inputs}>
          <Input
            value={formData.firstName}
            type="text"
            label="Имя (Отчество)"
            placeholder="Александр"
            onChange={handleInputChange('firstName')}
            required
          />
          <Input
            value={formData.lastName}
            type="text"
            label="Фамилия"
            placeholder="Иванов"
            onChange={handleInputChange('lastName')}
            required
          />
          <Input
            value={formData.telegram}
            label="Ник в телеграм"
            placeholder="@alex"
            onChange={handleInputChange('telegram')}
            minLength={2}
            required
          />
          <Input
            value={formData.email}
            type="email"
            label="Почта"
            placeholder="alex@ya.ru"
            onChange={handleInputChange('email')}
          />
          <Textarea
            value={formData.about}
            label="Обо мне"
            placeholder="Добавьте информацию о себе. 
О вашей квалификации, сертификатах, об опыте преподавания. Объясните, какими будут ваши уроки, какие методы обучения используете в работе, как это помогает ученикам."
            onChange={handleInputChange('about')}
            minLength={100}
            maxLength={2000}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default ProfileInfo;
