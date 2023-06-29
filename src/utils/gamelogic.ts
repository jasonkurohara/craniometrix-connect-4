import { BoardStateType } from "../types/types";

export const dropPiece = (
  boardState: BoardStateType,
  setBoardState: React.Dispatch<React.SetStateAction<number[][]>>,
  colIdx: number,
  currentPlayer: number,
  setGameState: React.Dispatch<React.SetStateAction<number>>
): boolean => {
  const newBoardState = JSON.parse(JSON.stringify(boardState)); // create a deep copy of boardState
  const numberOfRows = newBoardState.length;

  // find the lowest empty spot in the specified column
  for (let row = numberOfRows - 1; row >= 0; row--) {
    if (newBoardState[row][colIdx] === 0) {
      newBoardState[row][colIdx] = currentPlayer;
      break;
    }
  }

  // update boardState
  setBoardState(newBoardState);
  if (isGameComplete(newBoardState)) {
    setGameState(1);
    return true;
  } else if (isStalemate(newBoardState)) {
    setGameState(2);
  }
  return false;
};

function isGameComplete(board: number[][]): boolean {
  const height = board.length;
  const width = board[0].length;

  // Check horizontal
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width - 3; col++) {
      if (
        board[row][col] &&
        board[row][col] === board[row][col + 1] &&
        board[row][col] === board[row][col + 2] &&
        board[row][col] === board[row][col + 3]
      ) {
        return true;
      }
    }
  }

  // Check vertical
  for (let row = 0; row < height - 3; row++) {
    for (let col = 0; col < width; col++) {
      if (
        board[row][col] &&
        board[row][col] === board[row + 1][col] &&
        board[row][col] === board[row + 2][col] &&
        board[row][col] === board[row + 3][col]
      ) {
        return true;
      }
    }
  }

  // Check diagonal (top-left to bottom-right)
  for (let row = 0; row < height - 3; row++) {
    for (let col = 0; col < width - 3; col++) {
      if (
        board[row][col] &&
        board[row][col] === board[row + 1][col + 1] &&
        board[row][col] === board[row + 2][col + 2] &&
        board[row][col] === board[row + 3][col + 3]
      ) {
        return true;
      }
    }
  }

  // Check diagonal (bottom-left to top-right)
  for (let row = 3; row < height; row++) {
    for (let col = 0; col < width - 3; col++) {
      if (
        board[row][col] &&
        board[row][col] === board[row - 1][col + 1] &&
        board[row][col] === board[row - 2][col + 2] &&
        board[row][col] === board[row - 3][col + 3]
      ) {
        return true;
      }
    }
  }

  // No winner
  return false;
}

function isStalemate(board: number[][]): boolean {
  const height = board.length;
  const width = board[0].length;
  var piecesLeft = true;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (board[row][col] === 0) {
        console.log("negating stalemate");
        piecesLeft = false;
      }
    }
  }
  return piecesLeft;
}

export function isColumnFull(board: BoardStateType, colIdx: number) {
  const height = board.length;
  var columnFull = true;
  for (let row = 0; row < height; row++) {
    if (board[row][colIdx] === 0) {
      columnFull = false;
    }
  }
  return columnFull;
}
