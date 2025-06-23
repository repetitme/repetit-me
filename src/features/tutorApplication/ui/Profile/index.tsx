import Button from '../../../../shared/ui/button'
import Input from '../../../../shared/ui/input';
import { AvatarWrapper } from '../AvatarWrapper';

import styles from './index.module.scss';

const ProfileInfo = () => {
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <AvatarWrapper />
        <Button 
          text="Загрузить фотографию " variant='underline'/>
      </div>

      <form className="form">
        <Input
          value="Александр"
          variant="form"
          type="text"
          label="Имя (Отчество)"
          placeholder="Александр"
          onChange={() => {}}
        />
        <Input
          value="surname"
          variant="form"
          type="text"
          label="Фамилия"
          placeholder="Иванов"
          onChange={() => {}}
        />
        <Input
          value="tg"
          variant="form"
          type="url"
          label="Ник в телеграм"
          placeholder="@aleksandr"
          onChange={() => {}}
        />
        <Input
          value="email"
          variant="form"
          type="email"
          label="Почта"
          placeholder="aleksandr@ya.ru"
          onChange={() => {}}
        />
        <Input
          value="info"
          variant="form"
          type="text"
          label="Обо мне"
          placeholder="Добавьте информацию о себе. О вашей квалификации, сертификатах, об опыте преподавания. Объясните, какими будут ваши уроки, какие методы обучения используете в работе, как это помогает ученикам."
          onChange={() => {}}
        />
      </form>
    </div>
  );
};

export default ProfileInfo;
