export const DICE_ROLL = 'DICE_ROLL';

export function diceRoll(dice1, dice2) {
  let diceTotal = dice1 + dice2;
  return {
    type: DICE_ROLL,
    payload: diceTotal
  };
}
