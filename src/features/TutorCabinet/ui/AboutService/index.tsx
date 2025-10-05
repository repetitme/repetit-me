import { useEffect, useState } from 'react';

import walletIcon from '../../../../assets/icons/conisWithAWalletIcon.svg';
import fundsIcon from '../../../../assets/icons/funds.svg';
import aboutIcon from '../../../../assets/icons/iconAboutService.svg';
import orderIcon from '../../../../assets/icons/transactionOrder.svg';
import { PopupContainer } from './components/popupContainer';
import { PopupContentList } from './components/popupContentList';
import { PopupContentPoints } from './components/popupContentPoints';
import { PopupContentText } from './components/popupContentText';
import { ServiceButton } from './components/serviceButton/serviceButton';

import styles from './index.module.scss';

import { IAboutService } from './type';

const AboutService = ({ bonusPopup, reviewPopup }: IAboutService) => {
  const [isBonusPopupOpen, setIsBonusPopupOpen] = useState(false);
  const [isReviewPopupOpen, setIsReviewPopupOpen] = useState(false);
  const [listItems, setListItems] = useState<React.ReactNode[]>([]);
  const [hasInputError, setHasInputError] = useState(false);

  const points = bonusPopup.points;
  const isBonusPopupDisabled = points < 500;
  const isReviewPopupDisabled = listItems.length === 0 || hasInputError;

  useEffect(() => {
    if (isBonusPopupOpen || isReviewPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isBonusPopupOpen, isReviewPopupOpen]);

  return (
    <>
      <div className={styles.buttons__container}>
        <ServiceButton
          title="Как пользоваться платформой"
          icon={aboutIcon}
          url="#0"
        ></ServiceButton>

        <ServiceButton
          title="Условия сотрудничества"
          icon={walletIcon}
          url="#0"
        ></ServiceButton>

        <ServiceButton
          title="Бонусная программа"
          icon={fundsIcon}
          onModal={() => setIsBonusPopupOpen(true)}
        ></ServiceButton>

        <ServiceButton
          title="Перенос ваших отзывов"
          icon={orderIcon}
          onModal={() => setIsReviewPopupOpen(true)}
        ></ServiceButton>
      </div>

      <PopupContainer
        isOpen={isBonusPopupOpen}
        onClose={() => setIsBonusPopupOpen(false)}
        popupTitle={bonusPopup.title}
        buttonTitle={bonusPopup.buttonText}
        isDisabled={isBonusPopupDisabled}
        URL="#0"
      >
        <PopupContentPoints
          inputName="Реферальная ссылка"
          url={bonusPopup.URL}
          points={points}
          readOnly={true}
        ></PopupContentPoints>
        <PopupContentText text={bonusPopup.text}></PopupContentText>
      </PopupContainer>

      <PopupContainer
        isOpen={isReviewPopupOpen}
        onClose={() => setIsReviewPopupOpen(false)}
        popupTitle={reviewPopup.title}
        buttonTitle={reviewPopup.buttonText}
        isDisabled={isReviewPopupDisabled}
        URL="#0"
      >
        <PopupContentText text={reviewPopup.text}></PopupContentText>
        <PopupContentList 
          onListChange={setListItems}
          onErrorChange={setHasInputError}
        ></PopupContentList>
      </PopupContainer>
    </>
  );
};

export default AboutService;