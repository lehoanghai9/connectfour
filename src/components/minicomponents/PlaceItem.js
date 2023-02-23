import { CheckDiagonalWin } from "./CheckDiagonalWin";
import { CheckHorizontalWin } from "./CheckHorizontalWin";
import { CheckVerticalWin } from "./CheckVerticalWin";



export const PlaceItem =
 ({ gameState, setGameState, selectedColumn, playerTurn, turnChange, connected, setConnected, setWins, wins, winner, setWinner, setSeconds }) => {
  let availableRow = gameState.filter((_, index) => index % 7 === selectedColumn).lastIndexOf(0);

  if (availableRow === -1 || connected.length === 4 || winner !== 0) {
    return;
  } else {
    gameState[availableRow * 7 + selectedColumn] = playerTurn;
    setGameState(gameState);

    CheckHorizontalWin({
      placedIndex: availableRow * 7 + selectedColumn,
      gameState,
      playerTurn,
      setConnected,
      setWins,
      wins,
      winner,
      setWinner
    });

    CheckVerticalWin({
      placedIndex: availableRow * 7 + selectedColumn,
      gameState, 
      playerTurn,
      setConnected, 
      setWins,
      wins,
      winner,
      setWinner
  });

    CheckDiagonalWin({
      placedIndex: availableRow * 7 + selectedColumn, 
      gameState, 
      playerTurn, 
      setConnected, 
      setWins,
      wins,
      winner,
      setWinner
    });

    turnChange();
    setSeconds(30);
  }

  return null;
};