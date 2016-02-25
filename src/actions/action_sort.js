export const SORT_CARDS = 'SORT_CARDS';
import sortedCards from '../utils/sort';

export function sortCards(card) {
  card = sortedCards(card);
  return {
    type: SORT_CARDS,
    payload: card
  };
}
