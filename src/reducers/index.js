import { combineReducers } from 'redux';
import CardsReducer from './reducer_cards';
import Expansion from './reducer_expansion';

const rootReducer = combineReducers({
  cards: CardsReducer,
  expansion: Expansion
});

export default rootReducer;
