import { PURCHASE_CARD } from '../actions/action_purchase';

export default function(state = [], action) {
  switch (action.type) {
    case PURCHASE_CARD:
    return [ action.payload, ...state ];
  }

  return state;
}
