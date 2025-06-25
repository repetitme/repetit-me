import { useState } from 'react';

import Button from '../../../../shared/ui/button';
import Input from '../../../../shared/ui/input';
import Textarea from '../../../../shared/ui/textarea';
import { AvatarWrapper } from '../AvatarWrapper';

import styles from './index.module.scss';

const ProfileInfo = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    telegram: '',
    email: '',
    about: ''
  });

  const handleInputChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value
      }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Отправляем данные:', formData);
    // Здесь нужно добавить API-запрос
  };

  return (
    // заменить wrapper на компонент Wrapper
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form__avatar}>
          <AvatarWrapper />
          <Button
            text="Загрузить фотографию "
            variant="underline"
            onClick={() => {}}
          />
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
      </form>
    </div>
  );
};

export default ProfileInfo;
