import { useState } from "react";
import styles from './index.module.scss';
import { ServicesListItem } from "./type";

// Общий компонент контейнера
interface ICardContainer {
  title: string;
  isHidden: boolean;
  toggleVisibility: () => void;
  children: React.ReactNode;
  hiddenClassName: string;
  buttonText: string;
}

const CardContainer: React.FC<ICardContainer> = ({ 
  title, 
  isHidden, 
  toggleVisibility, 
  children, 
  hiddenClassName,
  buttonText
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.container__header}>{title}</h3>
      <div className={`${styles.container__content} ${isHidden ? hiddenClassName : ''}`}>
        {children}
      </div>
      <button className={styles.container__button} onClick={toggleVisibility}>
        {isHidden ? `${buttonText}` : 'Скрыть'}
      </button>
    </div>
  );
};

// Компонент для текстового контента
interface ITextContent {
  content: string;
}

const TextContent: React.FC<ITextContent> = ({ content }) => {
  return <p className={styles.container__content_text}>{content}</p>;
};

// Компонент для списка услуг
interface IServicesList {
  services: ServicesListItem[];
}

const ServicesList: React.FC<IServicesList> = ({ services }) => {
  return (
    <ul className={styles.container__content_list}>
      {services.map((item, index) => (
        <li key={index} className={styles.container__content_list_item}>
          <span>{item.service}</span> <span>{item.price} руб./час</span>
        </li>
      ))}
    </ul>
  );
};

// Основной компонент
interface IAboutMe {
  textContent: string;
  servicesList: ServicesListItem[];
}

export const AboutMe: React.FC<IAboutMe> = ({ textContent, servicesList }) => {
  const [aboutMeHidden, setAboutMeHidden] = useState(true);
  const [listHidden, setListHidden] = useState(true);

  const toggleAboutMeVisibility = () => setAboutMeHidden(!aboutMeHidden);
  const toggleListVisibility = () => setListHidden(!listHidden);

  return (
    <>
      <CardContainer 
        title="Обо мне" 
        isHidden={aboutMeHidden} 
        toggleVisibility={toggleAboutMeVisibility}
        hiddenClassName={styles.container__content_text_hidden}
        buttonText="Читать дальше"
      >
        <TextContent content={textContent} />
      </CardContainer>

      <CardContainer 
        title="Услуги и цены" 
        isHidden={listHidden} 
        toggleVisibility={toggleListVisibility}
        hiddenClassName={styles.container__content_list_hidden}
        buttonText="Развернуть"
      >
        <ServicesList services={servicesList} />
      </CardContainer>
    </>
  );
};