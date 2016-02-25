import { DICE_ROLL } from '../actions/action_roll';

export default function(state = [], action) {
  switch (action.type) {
    case DICE_ROLL:
    return state = action.payload;
  }

  return state;
}
