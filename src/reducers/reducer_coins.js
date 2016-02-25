import { COIN_TOTAL } from '../actions/action_coins';
const start = 3;

export default function(state = start, action) {
  switch (action.type) {
    case COIN_TOTAL:
    return state = state + action.payload;
    default: {
      return state;
    }
  }
}
