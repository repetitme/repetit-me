import classNames from 'classnames';
import { Link, useLocation } from 'react-router';

import phone from '../../assets/images/phone_with_qr-code.svg';
import logo from '../../assets/images/repetit-me_logo.svg';
import telegram from '../../assets/images/telegram_icon.svg';
import Button from '../../shared/ui/button';
import ScrollUp from '../../shared/ui/scrollUp';

import styles from './index.module.scss';

import { TfakeUser } from './type';

const Footer = ({ role, goTelegram }: TfakeUser) => {
  const location = useLocation();

  const handleTelegramClick = () => {
    window.open('tg://resolve?domain=RepetitMe_bot', '_blank');

    setTimeout(() => {
      window.open('https://t.me/RepetitMe_bot', '_blank');
    }, 200);
  };

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
            onClick={handleTelegramClick}
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
            role !== 'unauth' && styles['footer__bottom--content__correct']
          )}
        >
          {role === 'unauth' && (
            <div className={styles.links}>
              <Link className={styles.links_item} to="/tutor-catalog">
                Ученику
              </Link>
              <Link
                className={styles.links_item}
                to="/register"
                state={{ backgroundLocation: location }}
              >
                Репетитору
              </Link>
            </div>
          )}
          <div
            className={classNames(
              styles.contact,
              role !== 'unauth' && styles.contact__correct
            )}
          >
            Связаться с нами: <br />
            <a className={styles.underline} onClick={handleTelegramClick}>
              Менеджер в Telegram
            </a>
          </div>
        </div>
        <div className={styles['footer__bottom--links']}>
          <p>2023-2024© Все права защищены</p>
          <a
            href="https://teletype.in/@repetitme/politica_obrabotki_personalnih_dannysh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Политика конфиденциальности
          </a>
          <ScrollUp />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
