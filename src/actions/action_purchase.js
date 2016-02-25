export const PURCHASE_CARD = 'PURCHASE_CARD';

export function purchaseCard(card) {
  return {
    type: PURCHASE_CARD,
    payload: card
  };
}
