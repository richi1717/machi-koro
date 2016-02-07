import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';
// New ES6 injection uses back tick `` with ${} to pass in, very cool!!!

export const FETCH_CARDS = 'FETCH_CARDS';

export function fetchCards(expansion) {
  const url = `${ROOT_URL}/cards`;
  const request = axios.get(url);

  return {
    type: FETCH_CARDS,
    payload: request
  };
}
