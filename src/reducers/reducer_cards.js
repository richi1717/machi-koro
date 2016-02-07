import { FETCH_CARDS} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_CARDS:
    return [ action.payload.data, ...state ];
  }
  return state;
}
