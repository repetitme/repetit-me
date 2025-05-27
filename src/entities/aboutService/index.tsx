import { ServiceButton } from './components/serviceButtons/serviceButton';
import { ButtonsContainer } from './components/ButtonsContainer';
import { PopupContainer } from './components/popupContainer';
import { ServiceURL } from './components/serviceButtons/ServiceURL';
import { PopupContentText } from './components/popupContentText';
import { PopupContentPoints } from './components/popupContentPoints';
import { PopupContentList } from './components/popupContentList';

import { IAboutService } from "./type";

import { useState } from 'react';

export const AboutService: React.FC<IAboutService> = ({bonusPopup, reviewPopup}) => {
    const [isBonusPopupOpen, setIsBonusPopupOpen] = useState(false);
    const [isReviewPopupOpen, setIsReviewPopupOpen] = useState(false);
    const [listItems, setListItems] = useState<React.ReactNode[]>([]);

    const points = bonusPopup.points
    const isBonusPopupDisabled = points < 500
    const isReviewPopupDisabled = listItems.length === 0;

    return (
        <>
            <ButtonsContainer>
                <ServiceURL
                    title='Как пользоваться платформой'
                    icon='src/entities/aboutService/data/iconAboutService.svg'
                    url='#0'
                ></ServiceURL>

                <ServiceURL
                    title='Условия сотрудничества'
                    icon='src/entities/aboutService/data/conisWithAWalletIcon.svg'
                    url='#0'
                ></ServiceURL>

                <ServiceButton
                    title='Бонусная программа'
                    icon='src/entities/aboutService/data/funds.svg'
                    onModal={() => setIsBonusPopupOpen(true)}
                ></ServiceButton>

                <ServiceButton
                    title='Перенос ваших отзывов'
                    icon='src/entities/aboutService/data/transactionOrder.svg'
                    onModal={() => setIsReviewPopupOpen(true)}
                ></ServiceButton>
            </ButtonsContainer>

            <PopupContainer isOpen={isBonusPopupOpen} onClose={() => setIsBonusPopupOpen(false)} popupTitle={bonusPopup.title} buttonTitle={bonusPopup.buttonText} isDisabled={isBonusPopupDisabled}>
                <PopupContentPoints
                    inputName='Реферальная ссылка'
                    url={bonusPopup.URL}
                    points={points}
                    readOnly={true}
                ></PopupContentPoints>
                <PopupContentText text={bonusPopup.text}></PopupContentText>
            </PopupContainer>

            <PopupContainer isOpen={isReviewPopupOpen} onClose={() => setIsReviewPopupOpen(false)} popupTitle={reviewPopup.title} buttonTitle={reviewPopup.buttonText} isDisabled={isReviewPopupDisabled}>
                <PopupContentText text={reviewPopup.text}></PopupContentText>
                <PopupContentList
                    onListChange={setListItems}
                ></PopupContentList>
            </PopupContainer>
        </>
    )
}