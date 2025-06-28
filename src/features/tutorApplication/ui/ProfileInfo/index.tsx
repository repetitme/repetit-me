import { useState } from 'react';

import Button from '../../../../shared/ui/button';
import Input from '../../../../shared/ui/input';
import Textarea from '../../../../shared/ui/textarea';
import Wrapper from '../../../../shared/ui/wrapper';
import AvatarBlock from '../AvatarBlock';
import AvatarUploadModal from '../AvatarUploadModal';

import styles from './index.module.scss';
import useForm from '../../../../shared/hooks/useForm'

type ProfileFormData = {
  
  lastName: string;
  telegram: string;
  email: string;
  about?: string;
  avatar: string;
};

const ProfileInfo = () => {
  const [formData, setFormData] = useState<ProfileFormData>({
    lastName: '',
    telegram: '',
    email: '',
    about: '',
    avatar: ''
  });

   const{ values, handleChange } = useForm({});

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAvatarUpload = (file?: File) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData((prev) => ({
          ...prev,
          avatar: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
    setIsModalOpen(false);
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
    <>
      <Wrapper large className={styles.wrapper}>
        <div className={styles.form}>
          <div className={styles.form__avatar}>
            <AvatarBlock avatarUrl={formData.avatar} />
            <Button
              text="Загрузить фотографию"
              variant="underline"
              onClick={() => {
                setIsModalOpen(true);
              }}
            />
          </div>

          <div className={styles.form__inputs}>
            <Input
            
            name='firstName'
              value={values.firstName}
              type="text"
              label="Имя (Отчество)"
              placeholder="Александр"
              onChange={handleChange}
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
      </Wrapper>{' '}
      {isModalOpen && (
        <AvatarUploadModal
          onClose={handleAvatarUpload}
          previewAvatar={formData.avatar}
        />
      )}
    </>
  );
};

export default ProfileInfo;
