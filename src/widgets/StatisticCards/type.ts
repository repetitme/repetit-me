export interface Card {
  title: string;
  value?: number;
  currency?: number;
  additionalInfo?: string;
  additionalValue?: number | string;
}

export interface StatCardProps {
  cards: Card[];
}
