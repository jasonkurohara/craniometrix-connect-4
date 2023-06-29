export function getCurrentPlayerDisplayString(player: number): string {
  if (player === 1) {
    return "Red";
  } else if (player === 2) {
    return "Yellow";
  }
  throw new Error("Uncategorized player number");
}

export function isGameInPlay(gameState: number): boolean {
  if (gameState === 0) {
    return true;
  }
  return false;
}

export function isWinnerDeclared(gameState: number): boolean {
  if (gameState === 1) {
    return true;
  }
  return false;
}

export function hasStalemateOccurred(gameState: number): boolean {
  if (gameState === 2) {
    return true;
  }
  return false;
}
