export interface ICardContainer {
    title: string;
    isHidden: boolean;
    toggleVisibility: () => void;
    children: React.ReactNode;
    hiddenClassName: string;
    buttonText: string;
}