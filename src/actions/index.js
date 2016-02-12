import axios from 'axios';
import _ from 'lodash';

const ROOT_URL = 'http://localhost:3000';
// New ES6 injection uses back tick `` with ${} to pass in, very cool!!!

export const FETCH_CARDS = 'FETCH_CARDS';
export const SORT_CARDS = 'SORT_CARDS';

export function fetchCards(expansion) {
  const expQuery = expansion === 'All' ? 'Harbor&gameSource=Millionaires%20Row' : expansion;
  const url = `${ROOT_URL}/cards?gameSource=${expQuery}&gameSource=Base`;
  const request = axios.get(url)
    .then(function (data){
      let sortedCards = _.orderBy(data.data, function (obj) {
        if (obj.roll.length > 0) {
          return obj.roll[0];
        } else {
          return obj.roll;
        }
      });
      sortedCards = _.orderBy(data.data, function (obj) {
        if (obj.roll.length > 0) {
          return obj.roll[1];
        } else {
          return obj.roll;
        }
      });
      return sortedCards;
    });

  return {
    type: FETCH_CARDS,
    payload: request
  };
}

export function sortCards(cards) {
  let sortedCards = _.orderBy(cards, function (obj) {
    if (obj.roll.length > 0) {
      return obj.roll[0];
    } else {
      return obj.roll;
    }
  });
  console.log(sortedCards);
  return {
    payload: sortedCards
  };
}
