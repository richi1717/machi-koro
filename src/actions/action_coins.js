export const COIN_TOTAL = 'COIN_TOTAL';

export function addCoins(coins) {
  return {
    type: COIN_TOTAL,
    payload: coins
  };
}
