import { SET_DECK } from '../actions/action_deck';

export default function(state = [], action) {
  switch (action.type) {
    case SET_DECK:
    return state = action.payload;
  }

  return state;
}
