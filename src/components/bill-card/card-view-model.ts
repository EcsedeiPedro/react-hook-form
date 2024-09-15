export interface CardProps {
  title: string;
  amount: number;
  date: string;
}

export const initialCards: CardProps[] = [
  { title: "Card 1", amount: 1329, date: "2024-09-01" },
  { title: "Card 2", amount: 1400, date: "2024-09-07" },
  { title: "Card 3", amount: 1500, date: "2024-09-14" },
];

const parseDate = (date: string): Date => {
  return new Date(date);
};

export const addCard = (newCard: CardProps, existingCards: CardProps[]): CardProps[] => {
  const updatedCards = [...existingCards, newCard];

  updatedCards.sort((a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime());

  return updatedCards;
};
