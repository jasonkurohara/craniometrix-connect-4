import React, { useState } from "react";
import Board from "./board/Board";
import { getCurrentPlayerDisplayString } from "./utils/utils";
import { Grid, Box, Typography, Button } from "@mui/material";
import Square from "./board/Square";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { isWinnerDeclared, hasStalemateOccurred } from "./utils/utils";

const initialBoardState = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

function App() {
  const [gameState, setGameState] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [boardState, setBoardState] = useState(initialBoardState);

  const handleButtonClick = () => {
    setGameState(0);
    setCurrentPlayer(1);
    setBoardState(initialBoardState);
  };

  const currentPlayerDisplay = getCurrentPlayerDisplayString(currentPlayer);
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item container spacing={1} justifyContent="center">
          <Box padding={4}>
            <Typography variant="h4">Craniometrix Connect 4</Typography>
          </Box>
        </Grid>
        <Grid item container justifyContent="center">
          <Box paddingX={4} paddingY={1} bgcolor={"#0000CD"}>
            <Box maxWidth={448}>
              <Board
                gameState={gameState}
                setGameState={setGameState}
                boardState={boardState}
                setBoardState={setBoardState}
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item container spacing={1} justifyContent="center">
          <Box
            padding={4}
            display="flex"
            flexDirection={"row"}
            alignItems={"center"}
          >
            <Typography variant="h6">Player Turn: </Typography>
            <Box padding={2}>
              <Square
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                gameState={1}
                setGameState={() => {}}
                boardState={[[0]]}
                value={currentPlayer}
                rowIdx={-1}
                colIdx={-1}
                setBoardState={() => {}}
                currentPlayer={-1}
                setCurrentPlayer={() => {}}
              />
            </Box>
          </Box>
          {isWinnerDeclared(gameState) && (
            <Box
              padding={4}
              display="flex"
              flexDirection={"row"}
              alignItems={"center"}
            >
              <Typography variant="h4">{`${currentPlayerDisplay} has won!`}</Typography>
            </Box>
          )}
          {hasStalemateOccurred(gameState) && (
            <Box
              padding={4}
              display="flex"
              flexDirection={"row"}
              alignItems={"center"}
            >
              <Typography variant="h4">{`Stalemate!`}</Typography>
            </Box>
          )}
        </Grid>
        <Grid item container spacing={1} justifyContent="center">
          <Button variant="contained" onClick={handleButtonClick}>
            Reset
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
