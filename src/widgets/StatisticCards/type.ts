export interface Card {
  title: string;
  value: number | string;
  currency?: string;
  additionalInfo?: string;
  additionalValue?: number | string;
}

export interface StatCardProps {
  cards: Card[];
}
