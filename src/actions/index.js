import axios from 'axios';
import _ from 'lodash';
import sortedCards from '../utils/sort';

const ROOT_URL = 'http://localhost:3000';
// New ES6 injection uses back tick `` with ${} to pass in, very cool!!!

export const FETCH_CARDS = 'FETCH_CARDS';

export function fetchCards(expansion) {
  const expQuery = expansion === 'All' ? 'Harbor&gameSource=Millionaires%20Row' : expansion;
  const url = `${ROOT_URL}/cards?gameSource=${expQuery}&gameSource=Base`;
  const request = axios.get(url)
    .then(function (data){
      if (expansion === 'Base') {
        return sortedCards(data.data);
      } else {
        return data.data;
      }
    });

  return {
    type: FETCH_CARDS,
    payload: request
  };
}
