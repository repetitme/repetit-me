import React from 'react';
import ScrollUp from '../../shared/components/ScrollUp';
import Button from '../../shared/components/Button';

import logo from '../../assets/images/repetit-me_logo.svg';
import telegram from '../../assets/images/telegram_icon.svg';
import phone from '../../assets/images/phone_with_qr-code.svg';
import styles from './styles.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <p className={styles.telegramText}>
          Переходите в <span className={styles.gradientText}>Telegram</span> — с
          ним еще удобнее.
        </p>
        <Button
          icon={<img src={telegram} alt="Telegram" />}
          text="Перейти в Telegram"
        />
        <img src={phone} alt="Phone" className={styles.phoneImage} />
      </div>
      <div className={styles.footerBottom}>
        <img src={logo} alt="RepetitMe" className={styles.repetitmeLogo} />
        <div className={styles.links}>
          <a href="#student">Ученику</a>
          <a href="#tutor">Репетитору</a>
        </div>
        <p className={styles.contact}>
          Связаться с нами:{' '}
          <span className={styles.underline}>Менеджер в Telegram</span>
        </p>
        <div className={styles.footerBottomLinks}>
          <p>2023-2024© Все права защищены</p>
          <a href="/privacy-policy">Политика конфиденциальности</a>
          <ScrollUp />
        </div>
      </div>
    </div>
  );
};

export default Footer;
