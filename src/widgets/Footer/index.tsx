import React from 'react';

import classNames from 'classnames';

import phone from '../../assets/images/phone_with_qr-code.svg';
import logo from '../../assets/images/repetit-me_logo.svg';
import telegram from '../../assets/images/telegram_icon.svg';
import Button from '../../shared/ui/button';
import ScrollUp from '../../shared/ui/scrollUp';

import styles from './index.module.scss';

import { TfakeUser } from './type';

const Footer: React.FC<TfakeUser> = ({ role, goTelegram }) => {
  return (
    <footer className={styles.footer}>
      {!goTelegram && (
        <div className={styles.footer__top}>
          <p className={styles.telegram__text}>
            Переходите в&nbsp;
            <span className={styles['telegram__text--gradient']}>
              Telegram
            </span>{' '}
            — с ним еще удобнее
          </p>
          <Button
            text="Перейти в Telegram"
            variant="social"
            size="large"
            className={styles.footer__button}
            icon={telegram}
          />
          <img src={phone} alt="Phone" className={styles.phone__image} />
        </div>
      )}
      <div className={styles.footer__bottom}>
        <img
          src={logo}
          alt="Логотип repetitMe"
          className={styles.repetitme__logo}
        />
        <div
          className={classNames(
            styles['footer__bottom--content'],
            role !== 'unauthorized' &&
              styles['footer__bottom--content__correct']
          )}
        >
          {role === 'unauthorized' && (
            <div className={styles.links}>
              <a className={styles.links_item} href="#student">
                Ученику
              </a>
            </div>
          )}
          <div
            className={classNames(
              styles.contact,
              role !== 'unauthorized' && styles.contact__correct
            )}
          >
            Связаться с нами: <br />
            <a className={styles.underline}>Менеджер в Telegram</a>
          </div>
        </div>
        <div className={styles['footer__bottom--links']}>
          <p>2023-2024© Все права защищены</p>
          <a href="/privacy-policy">Политика конфиденциальности</a>
          <ScrollUp />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
