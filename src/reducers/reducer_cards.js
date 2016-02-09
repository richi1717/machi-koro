import { FETCH_CARDS, SORT_CARDS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_CARDS:
    return [ action.payload.data, ...state ];
  case SORT_CARDS:
    console.log(action, 'hey');
    return [ action.payload, ...state ];
  }

  return state;
}
