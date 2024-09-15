'use client'

import { useState } from "react";
import { BillCard } from "../components/bill-card/bill-card"
import { BillForm } from "../components/form"
import { initialCards, CardProps, addCard } from "../components/bill-card/card-view-model";

export const Home = () => {
  const [cards, setCards] = useState<CardProps[]>(initialCards);

  const handleAddCard = (card: CardProps) => {
    const updatedCards = addCard(card, cards);
    setCards(updatedCards);
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex gap-4 py-10">
          <div className="w-5/12 bg-stone-700 rounded-xl p-10">
            <h1 className="text-2xl font-bold w-max border-b-4 border-purple-700">Cadastre sua entrada</h1>

            <BillForm addCard={handleAddCard} />
          </div>

          <div className="w-7/12 max-h-[548px] overflow-y-auto scrollbar-custom bg-stone-800 rounded-l-xl rounded-s-xl rounded- p-6">
           <h2 className="text-xl font-bold">Entradas</h2>

            <div className="grid grid-cols-2 gap-4 py-5">
              {cards.map(( card, index ) => (
                <BillCard key={index} {...card} previousAmount={index > 0 ? cards[index - 1].amount : undefined} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}