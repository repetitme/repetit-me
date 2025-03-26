import { FC } from 'react';

import star from '../../assets/img/icon-star.svg';
import videobutton from '../../assets/img/icon-video.svg';
import iconDisciplines from '../../assets/img/icon-disciplines.svg';
import iconClasses from '../../assets/img/icon-classes.svg';
import iconTargets from '../../assets/img/icon-target.svg';

import styles from './index.module.scss';
import { CarouselProps } from './type';

const Carousel: FC<CarouselProps> = ({ tutor }) => {
  return (
    <>
      <li className={styles.carousel__navigation_cards_card}>
        <div className={styles.carousel__navigation_cards_card_raiting}>
          <p className={styles.carousel__navigation_cards_card_raiting_number}>
            {tutor.rating}
          </p>
          <img
            className={styles.carousel__navigation_cards_card_raiting_star}
            src={star}
            alt="Рейтинг"
          ></img>
        </div>

        <img
          className={styles.carousel__navigation_cards_card_image}
          src={tutor.avatar}
          alt={tutor.name + ' ' + tutor.surname}
        ></img>
        <img
          className={styles.carousel__navigation_cards_card_videobutton}
          src={videobutton}
          alt="Кнопка"
        ></img>

        <div className={styles.carousel__navigation_cards_card_info}>
          <h1 className={styles.carousel__navigation_cards_card_info_name}>
            <b>
              {tutor.name} {tutor.surname}
            </b>
          </h1>
          <p className={styles.carousel__navigation_cards_card_info_type}>
            {tutor.type_tutor}&nbsp; <b> Стаж {tutor.experience} лет</b>
          </p>
          <p className={styles.carousel__navigation_cards_card_info_about}>
            <b>О себе:</b> {tutor.about}
          </p>
          <p className={styles.carousel__navigation_cards_card_info_price}>
            <b>от {tutor.price} руб. /час</b>
          </p>

          <div className={styles.carousel__navigation_cards_card_info_skills}>
            <div
              className={
                styles.carousel__navigation_cards_card_info_skills_category
              }
            >
              <img
                className={
                  styles.carousel__navigation_cards_card_info_skills_disciplines_icon
                }
                src={iconDisciplines}
                alt="Дисциплины"
              ></img>
              {tutor.disciplines.map((discipline) => (
                <span
                  className={
                    styles.carousel__navigation_cards_card_info_skills_tag
                  }
                >
                  {discipline}
                </span>
              ))}
            </div>

            <div
              className={
                styles.carousel__navigation_cards_card_info_skills_category
              }
            >
              <img
                className={
                  styles.carousel__navigation_cards_card_info_skills_classes_icon
                }
                src={iconClasses}
                alt="Навыки"
              ></img>
              {tutor.classes.map((classroom) => (
                <span
                  className={
                    styles.carousel__navigation_cards_card_info_skills_tag
                  }
                >
                  {classroom}
                </span>
              ))}
            </div>

            <div
              className={
                styles.carousel__navigation_cards_card_info_skills_category
              }
            >
              <img
                className={
                  styles.carousel__navigation_cards_card_info_skills_targets_icon
                }
                src={iconTargets}
                alt="Уровень подготовки"
              ></img>
              {tutor.targets.map((target) => (
                <span
                  className={
                    styles.carousel__navigation_cards_card_info_skills_tag
                  }
                >
                  {target}
                </span>
              ))}
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default Carousel;
