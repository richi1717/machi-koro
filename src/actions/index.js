import axios from 'axios';
import _ from 'lodash';

const ROOT_URL = 'http://localhost:3000';
// New ES6 injection uses back tick `` with ${} to pass in, very cool!!!

export const FETCH_CARDS = 'FETCH_CARDS';
export const SORT_CARDS = 'SORT_CARDS';

export function fetchCards(expansion) {
  const expQuery = expansion === 'All' ? 'Harbor&gameSource=Millionaires%20Row' : expansion;
  const url = `${ROOT_URL}/cards?gameSource=${expQuery}&gameSource=Base`;
  const request = axios.get(url);

  return {
    type: FETCH_CARDS,
    payload: request
  };
}

export function sortCards(cards) {
  cards = _.sortBy(cards, ['roll[0]'], ['asc']);
  console.log(cards);
  return {
    type: SORT_CARDS,
    payload: cards
  };
}
