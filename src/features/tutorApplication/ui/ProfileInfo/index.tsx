import { useState } from 'react';

import useForm from '../../../../shared/hooks/useForm';
import useScrollLock from '../../../../shared/hooks/useScrollLock';
import Button from '../../../../shared/ui/button';
import Input from '../../../../shared/ui/input';
import Textarea from '../../../../shared/ui/textarea';
import Wrapper from '../../../../shared/ui/wrapper';
import AvatarBlock from '../AvatarBlock';
import AvatarUploadModal from '../AvatarUploadModal';

import styles from './index.module.scss';

type ProfileFormData = {
  firstName: string;
  lastName: string;
  telegram: string;
  email: string;
  about?: string;
  avatar: string;
};

const ProfileInfo = () => {
  const { values, handleChange, setValues } = useForm<ProfileFormData>({
    firstName: '',
    lastName: '',
    telegram: '',
    email: '',
    about: '',
    avatar: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  useScrollLock(isModalOpen);

  const handleAvatarUpload = (file?: File) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setValues((prev) => ({
          ...prev,
          avatar: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <Wrapper large className={styles.wrapper}>
        <div className={styles.form}>
          <div className={styles.form__avatar}>
            <AvatarBlock avatarUrl={values.avatar} />
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
              name="firstName"
              value={values.firstName}
              type="text"
              label="Имя (Отчество)"
              placeholder="Александр"
              onChange={handleChange}
              pattern="^[A-Za-zА-Яа-яЁё \-]+$"
              title="Поле может содержать только буквы, пробелы и дефисы"
              minLength={1}
              maxLength={50}
              required
            />
            <Input
              name="lastName"
              value={values.lastName}
              type="text"
              label="Фамилия"
              placeholder="Иванов"
              onChange={handleChange}
              pattern="^[A-Za-zА-Яа-яЁё \-]+$"
              title="Поле может содержать только буквы, пробелы и дефисы"
              minLength={1}
              maxLength={100}
              required
            />
            <Input
              name="telegram"
              value={values.telegram}
              label="Ник в телеграм"
              placeholder="@alex"
              onChange={handleChange}
              minLength={2}
              pattern="^@[A-Za-z0-9_]+$"
              title="Ник должен начинаться с @ и содержать только латинские буквы, цифры или _"
              required
            />
            <Input
              name="email"
              value={values.email}
              type="email"
              label="Почта"
              placeholder="alex@ya.ru"
              onChange={handleChange}
            />
            <Textarea
              name="about"
              value={values.about}
              label="Обо мне"
              placeholder="Добавьте информацию о себе. 
О вашей квалификации, сертификатах, об опыте преподавания. Объясните, какими будут ваши уроки, какие методы обучения используете в работе, как это помогает ученикам."
              onChange={handleChange}
              minLength={100}
              maxLength={2000}
              error="Минимум 100 символов"
            />
          </div>
        </div>
      </Wrapper>{' '}
      {isModalOpen && (
        <AvatarUploadModal
          onClose={handleAvatarUpload}
          previewAvatar={values.avatar}
        />
      )}
    </>
  );
};

export default ProfileInfo;
