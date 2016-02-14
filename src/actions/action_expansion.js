export const SET_EXPANSION = 'SET_EXPANSION';

export function setExpansion(expansion) {
  return {
    type: SET_EXPANSION,
    payload: expansion
  };
}
