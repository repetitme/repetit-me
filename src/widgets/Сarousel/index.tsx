import React, { useState, useEffect } from 'react';
import { FC } from 'react';
import styles from './style.module.scss';
import arrow_left from '../../assets/img/arrow-left.png';
import arrow_right from '../../assets/img/arrow-right.png';
import { CarouselProps } from './type';

import star from '../../assets/img/icon-star.png';
import videobutton from '../../assets/img/icon-video.png';
import iconDisciplines from '../../assets/img/icon-disciplines.png';
import iconClasses from '../../assets/img/icon-classes.png';
import iconTargets from '../../assets/img/icon-target.png';

const Carousel: FC<CarouselProps> = ({ tutorsCard }) => {
  const [state, setState] = useState(
    styles.carousel__navigation_button_arrow_unlock
  );
  const cardRenderedCount: number = 3;
  const cardCount: number = tutorsCard.length;
  const renderedCards: React.ReactElement[] = [];

  useEffect(() => {
    if (cardCount >= cardRenderedCount) {
      setState(styles.carousel__navigation_button_unlock);
    } else {
      setState(styles.carousel__navigation_button_lock);
    }
  }, []);

  for (let i = 0; i < cardRenderedCount; i++) {
    renderedCards.push(
      <li className={styles.carousel__navigation_cards_card}>
        <div className={styles.carousel__navigation_cards_card_raiting}>
          <p className={styles.carousel__navigation_cards_card_raiting_number}>
            {tutorsCard[i].rating}
          </p>
          <img
            className={styles.carousel__navigation_cards_card_raiting_star}
            src={star}
          ></img>
        </div>

        <img
          className={styles.carousel__navigation_cards_card_image}
          src={tutorsCard[i].avatar}
        ></img>
        <img
          className={styles.carousel__navigation_cards_card_videobutton}
          src={videobutton}
        ></img>

        <div className={styles.carousel__navigation_cards_card_info}>
          <h1 className={styles.carousel__navigation_cards_card_info_name}>
            <b>
              {tutorsCard[i].name} {tutorsCard[i].surname}
            </b>
          </h1>
          <p className={styles.carousel__navigation_cards_card_info_type}>
            {tutorsCard[i].type_tutor}&nbsp;{' '}
            <b> Стаж {tutorsCard[i].experience} лет</b>
          </p>
          <p className={styles.carousel__navigation_cards_card_info_about}>
            <b>О себе:</b> {tutorsCard[i].about}
          </p>
          <p className={styles.carousel__navigation_cards_card_info_price}>
            <b>от {tutorsCard[i].price} руб. /час</b>
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
              ></img>
              {tutorsCard[i].disciplines.map((discipline) => (
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
              ></img>
              {tutorsCard[i].classes.map((classroom) => (
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
              ></img>
              {tutorsCard[i].targets.map((target) => (
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
    );
  }

  return (
    <>
      <div className={styles.carousel}>
        <div className={styles.carousel__navigation}>
          <button className={state}>
            <img
              src={arrow_left}
              className={styles.carousel__navigation_button_arrow}
            ></img>
          </button>
          <ul className={styles.carousel__navigation_cards}>{renderedCards}</ul>
          <button className={state}>
            <img
              src={arrow_right}
              className={styles.carousel__navigation_arrow}
            ></img>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
