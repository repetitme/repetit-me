import { ServiceButton } from './components/serviceButton/serviceButton';
import { PopupContainer } from './components/popupContainer';
import { PopupContentText } from './components/popupContentText';
import { PopupContentPoints } from './components/popupContentPoints';
import { PopupContentList } from './components/popupContentList';

import aboutIcon from '../../assets/icons/iconAboutService.svg';
import walletIcon from '../../assets/icons/conisWithAWalletIcon.svg';
import fundsIcon from '../../assets/icons/funds.svg';
import orderIcon from '../../assets/icons/transactionOrder.svg';

import { IAboutService } from './type';

import styles from './index.module.scss';
import { useState } from 'react';

export const AboutService: React.FC<IAboutService> = ({
  bonusPopup,
  reviewPopup
}) => {
  const [isBonusPopupOpen, setIsBonusPopupOpen] = useState(false);
  const [isReviewPopupOpen, setIsReviewPopupOpen] = useState(false);
  const [listItems, setListItems] = useState<React.ReactNode[]>([]);

  const points = bonusPopup.points;
  const isBonusPopupDisabled = points < 500;
  const isReviewPopupDisabled = listItems.length === 0;

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
        <PopupContentList onListChange={setListItems}></PopupContentList>
      </PopupContainer>
    </>
  );
};
