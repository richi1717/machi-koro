import _ from 'lodash';

export const SET_DECK = 'SET_DECK';

export function setDeck(cards) {
  if (cards.length) {
    const deck = [];
    cards[0].forEach((card) => {
      let amount = card.amount;
      while (amount > 0) {
        amount--;
        deck.push(card);
      }
    });
    cards = _.shuffle(deck);
  }
  return {
    type: SET_DECK,
    payload: cards
  };
}
