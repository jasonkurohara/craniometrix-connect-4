import * as React from "react";
import { Grid, Box } from "@mui/material";
import { BoardStateType } from "../types/types";
import { CSSProperties } from "react";
import { dropPiece } from "../utils/gamelogic";
import { isColumnFull } from "../utils/gamelogic";

let connect4SquareStyle: CSSProperties = {
  width: 64,
  height: 64,
  borderRadius: "50%",
  backgroundColor: "#f0f0f0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
};

type SquareProps = {
  value: number;
  rowIdx: number;
  colIdx: number;
  gameState: number;
  setGameState: React.Dispatch<React.SetStateAction<number>>;
  boardState: BoardStateType;
  setBoardState: React.Dispatch<React.SetStateAction<number[][]>>;
  currentPlayer: number;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<number>>;
  onMouseEnter: (column: number) => void;
  onMouseLeave: () => void;
};

export default function Square({
  value,
  rowIdx,
  colIdx,
  gameState,
  setGameState,
  boardState,
  setBoardState,
  currentPlayer,
  setCurrentPlayer,
  onMouseEnter,
  onMouseLeave,
}: SquareProps) {
  var content = null;

  const handleClick = () => {
    // Game is already finished
    if (gameState === 1) {
      return;
    }
    // No empty spaces to drop piece
    if (isColumnFull(boardState, colIdx)) {
      return;
    }

    const isGameFinished = dropPiece(
      boardState,
      setBoardState,
      colIdx,
      currentPlayer,
      setGameState
    );

    if (!isGameFinished) {
      setCurrentPlayer((prevState) => {
        if (prevState === 1) {
          return 2;
        } else {
          return 1;
        }
      });
    }
  };

  switch (value) {
    case 0:
      connect4SquareStyle = {
        ...connect4SquareStyle,
        backgroundColor: "white",
      };
      content = (
        <Box
          style={connect4SquareStyle}
          onClick={handleClick}
          onMouseEnter={() => {
            onMouseEnter(colIdx);
          }}
        />
      );
      break;
    case 1:
      connect4SquareStyle = {
        ...connect4SquareStyle,
        backgroundColor: "#FF0000",
      };
      content = <Box style={connect4SquareStyle} onClick={handleClick} />;
      break;
    case 2:
      connect4SquareStyle = {
        ...connect4SquareStyle,
        backgroundColor: "#FFFF00",
      };
      content = <Box style={connect4SquareStyle} onClick={handleClick} />;
      break;
    default:
      break;
  }
  return <Grid item>{content}</Grid>;
}
