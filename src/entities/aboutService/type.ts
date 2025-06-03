export interface IAboutService {
  bonusPopup: bonusPopupType;
  reviewPopup: reviewPopupType;
}

export type bonusPopupType = {
  title: string;
  text: string;
  buttonText: string;
  URL: string;
  points: number;
};

export type reviewPopupType = {
  title: string;
  text: string;
  buttonText: string;
};
