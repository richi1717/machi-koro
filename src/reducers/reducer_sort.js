import { SORT_CARDS } from '../actions/action_sort';

export default function(state = [], action) {
  switch (action.type) {
    case SORT_CARDS:
    return state = action.payload;
  }

  return state;
}
