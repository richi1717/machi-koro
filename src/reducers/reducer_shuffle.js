import { SHUFFLE_CARDS } from '../actions/action_shuffle';

export default function(state = [], action) {
  switch (action.type) {
    case SHUFFLE_CARDS:
    return state = action.payload;
  }

  return state;
}
