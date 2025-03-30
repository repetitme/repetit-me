import { FC } from 'react';

import star from '../../assets/img/icon-star.svg';
import videobutton from '../../assets/img/icon-video.svg';
import iconDisciplines from '../../assets/img/icon-disciplines.svg';
import iconClasses from '../../assets/img/icon-classes.svg';
import iconTargets from '../../assets/img/icon-target.svg';

import styles from './index.module.scss';
import { ITutorCard } from './type';

const Carousel: FC<ITutorCard> = ({
  id,
  rating,
  avatar,
  name,
  surname,
  type_tutor,
  experience,
  about,
  price,
  disciplines,
  classes,
  targets
}) => {
  return (
    <li className={styles.carousel__navigation_cards_card} key={id}>
      <div className={styles.carousel__navigation_cards_card_raiting}>
        <p className={styles.carousel__navigation_cards_card_raiting_number}>
          {rating}
        </p>
        <img
          className={styles.carousel__navigation_cards_card_raiting_star}
          src={star}
          alt="Рейтинг"
        ></img>
      </div>

      <img
        className={styles.carousel__navigation_cards_card_image}
        src={avatar}
        alt={name + ' ' + surname}
      ></img>
      <img
        className={styles.carousel__navigation_cards_card_videobutton}
        src={videobutton}
        alt="Кнопка"
      ></img>

      <div className={styles.carousel__navigation_cards_card_info}>
        <h3 className={styles.carousel__navigation_cards_card_info_name}>
          <b>
            {name} {surname}
          </b>
        </h3>
        <p className={styles.carousel__navigation_cards_card_info_type}>
          {type_tutor}&nbsp; <b> Стаж {experience} лет</b>
        </p>
        <p className={styles.carousel__navigation_cards_card_info_about}>
          <b>О себе:</b> {about}
        </p>
        <p className={styles.carousel__navigation_cards_card_info_price}>
          <b>от {price} руб. /час</b>
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
            {disciplines.map((discipline, index) => (
              <span
                className={
                  styles.carousel__navigation_cards_card_info_skills_tag
                }
                key={index}
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
            {classes.map((classroom, index) => (
              <span
                className={
                  styles.carousel__navigation_cards_card_info_skills_tag
                }
                key={index}
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
            {targets.map((target, index) => (
              <span
                className={
                  styles.carousel__navigation_cards_card_info_skills_tag
                }
                key={index}
              >
                {target}
              </span>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Carousel;
