import { combineReducers } from 'redux';
import CardsReducer from './reducer_cards';
import Expansion from './reducer_expansion';
import DiceRoll from './reducer_roll';
import Purchase from './reducer_purchase';
import SortedCards from './reducer_sort';
import Deck from './reducer_deck';
import Shuffled from './reducer_shuffle';
import Coins from './reducer_coins';

const rootReducer = combineReducers({
  cards: CardsReducer,
  expansion: Expansion,
  diceTotal: DiceRoll,
  purchasedCards: Purchase,
  sortedCards: SortedCards,
  deck: Deck,
  shuffledCards: Shuffled,
  coins: Coins
});

export default rootReducer;
