import { useEffect, useState } from 'react';

import useForm from '../../../../shared/hooks/useForm';
import useScrollLock from '../../../../shared/hooks/useScrollLock';
import Button from '../../../../shared/ui/button';
import Input from '../../../../shared/ui/input';
import Textarea from '../../../../shared/ui/textarea';
import Wrapper from '../../../../shared/ui/wrapper';
import AvatarBlock from './AvatarBlock';
import AvatarUploadModal from './AvatarUploadModal';

import styles from './index.module.scss';

import { ProfileFormData, ProfileInfoProps } from './type';

const ProfileInfo = ({
  setIsValid,
  onDataChange,
  initialData
}: ProfileInfoProps) => {
  const { values, handleChange, setValues } =
    useForm<ProfileFormData>(initialData);
  const [hasAvatar, setHasAvatar] = useState(!!initialData.avatar);

  const handleChangeValid = (error: string, name: string) => {
    setIsValid((prev) => ({ ...prev, [name]: !error }));
  };

  useEffect(() => {
    onDataChange(values);
    setHasAvatar(!!values.avatar);
  }, [values]);

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
            <AvatarBlock
              avatarUrl={values.avatar}
              onClick={() => setIsModalOpen(true)}
            />
            <Button
              text={hasAvatar ? 'Изменить фотографию' : 'Загрузить фотографию'}
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
              pattern="^[А-Яа-яЁё\s\-]+([\s\-][А-Яа-яЁё]+)*$"
              title="Поле может содержать только кириллические буквы, пробелы и дефисы"
              minLength={1}
              maxLength={50}
              extraClass={styles.input}
              required
              onError={handleChangeValid}
            />
            <Input
              name="lastName"
              value={values.lastName}
              type="text"
              label="Фамилия"
              extraClass={styles.input}
              placeholder="Иванов"
              onChange={handleChange}
              pattern="^[А-Яа-яЁё\s\-]+$"
              title="Поле может содержать только кириллические буквы, пробелы и дефисы"
              minLength={1}
              maxLength={100}
              required
              onError={handleChangeValid}
            />
            <Input
              name="tg"
              value={values.tg}
              label="Ник в телеграм"
              placeholder="@alex"
              extraClass={styles.input}
              onChange={handleChange}
              minLength={6}
              maxLength={31}
              pattern="^@[A-Za-z0-9_]+$"
              title="Ник должен начинаться с @ и содержать только латинские буквы, цифры или _"
              required
              onError={handleChangeValid}
            />
            <Input
              name="email"
              value={values.email || ''}
              label="Почта"
              placeholder="alex@ya.ru"
              extraClass={styles.input}
              onChange={handleChange}
              onError={handleChangeValid}
            />
            <Textarea
              name="about"
              value={values.about}
              label="Обо мне"
              placeholder="Добавьте информацию о себе. 
О вашей квалификации, сертификатах, об опыте преподавания. Объясните, какими будут ваши уроки, какие методы обучения используете в работе, как это помогает ученикам."
              onChange={handleChange}
              pattern="^[А-Яа-яЁё0-9\s\-\(\)\/\,\.\!\:\;\'\?]+$"
              minLength={100}
              maxLength={2000}
              title="Минимум 100 символов"
              onError={handleChangeValid}
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
