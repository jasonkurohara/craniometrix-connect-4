import React, { useState } from "react";
import { BoardStateType } from "../types/types";
import { Grid, Box } from "@mui/material";
import Row from "./Row";
import { Arrow } from "./Arrow";

type BoardProps = {
  gameState: number;
  setGameState: React.Dispatch<React.SetStateAction<number>>;
  boardState: BoardStateType;
  setBoardState: React.Dispatch<React.SetStateAction<number[][]>>;
  currentPlayer: number;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<number>>;
};

export default function Board({
  gameState,
  setGameState,
  boardState,
  setBoardState,
  currentPlayer,
  setCurrentPlayer,
}: BoardProps) {
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);

  const handleMouseEnter = (column: number) => {
    setHoveredColumn(column);
  };

  const handleMouseLeave = () => {
    setHoveredColumn(null);
  };

  const rows = boardState.map((boardRow, rowIdx) => {
    return (
      <Row
        values={boardRow}
        rowIdx={rowIdx}
        gameState={gameState}
        setGameState={setGameState}
        boardState={boardState}
        setBoardState={setBoardState}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    );
  });

  return (
    <Grid container>
      <Grid container item>
        <HeaderRow boardState={boardState} hoveredColumn={hoveredColumn} />
      </Grid>
      {rows}
    </Grid>
  );
}

function HeaderRow({
  boardState,
  hoveredColumn,
}: {
  boardState: BoardStateType;
  hoveredColumn: number | null;
}) {
  const headerRow = new Array(boardState[0].length)
    .fill(null)
    .map((_, columnIdx) => {
      return (
        <Grid
          item
          key={`header-${columnIdx}`}
          sx={{
            position: "relative",
            flex: "1 1 0px", // Each column takes up an equal amount of space
          }}
        >
          {hoveredColumn === columnIdx && (
            <Box
              sx={{
                position: "absolute",
                top: 0, // Position at the top of the column
                left: "50%", // Center horizontally
                transform: "translateX(-50%)", // Center
              }}
            >
              <Arrow />
            </Box>
          )}
        </Grid>
      );
    });
  return <>{headerRow}</>;
}
