export const SHUFFLE_CARDS = 'SHUFFLE_CARDS';
import shuffleCards from '../utils/shuffle';

export function cardShuffle(card) {
  card = shuffleCards(card);
  return {
    type: SHUFFLE_CARDS,
    payload: card
  };
}
