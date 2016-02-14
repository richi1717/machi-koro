import { SET_EXPANSION } from '../actions/action_expansion';

export default function(state = [], action) {
  switch (action.type) {
    case SET_EXPANSION:
    return state = action.payload;
  }

  return state;
}
