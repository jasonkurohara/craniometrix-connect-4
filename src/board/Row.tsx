import * as React from "react";
import { Grid } from "@mui/material";
import { BoardStateType } from "../types/types";
import Square from "./Square";

type RowProps = {
  values: number[];
  rowIdx: number;
  gameState: number;
  setGameState: React.Dispatch<React.SetStateAction<number>>;
  boardState: BoardStateType;
  setBoardState: React.Dispatch<React.SetStateAction<number[][]>>;
  currentPlayer: number;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<number>>;
  onMouseEnter: (column: number) => void;
  onMouseLeave: () => void;
};

export default function Row({
  values,
  rowIdx,
  gameState,
  setGameState,
  boardState,
  setBoardState,
  currentPlayer,
  setCurrentPlayer,
  onMouseEnter,
  onMouseLeave,
}: RowProps) {
  const squares = values.map((value, colIdx) => {
    return (
      <Square
        value={value}
        rowIdx={rowIdx}
        colIdx={colIdx}
        gameState={gameState}
        setGameState={setGameState}
        boardState={boardState}
        setBoardState={setBoardState}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  });
  return (
    <Grid item container justifyContent="center">
      {squares}
    </Grid>
  );
}
