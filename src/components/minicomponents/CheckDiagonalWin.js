
export const CheckDiagonalWin = ({ placedIndex, gameState, playerTurn, setConnected, wins, setWins, winner, setWinner }) => {
  const row = Math.floor(placedIndex / 7);
  const col = placedIndex % 7;

  // Check for diagonal win from top-left to bottom-right
  let i = row - Math.min(row, col);
  let j = col - Math.min(row, col);
  let count = 0;
  const indexesLTR = [];

  while (i <= 5 && j <= 6) {
    if (gameState[i * 7 + j] === playerTurn) {
      count++;
      indexesLTR.push(i * 7 + j);
    } else {
      count = 0;
      indexesLTR.length = 0;
    }

    if (count === 4) {
      wins[playerTurn - 1] ++
      setWins(wins);
      setWinner(playerTurn)
      setConnected(indexesLTR);
      return;
    }

    i++;
    j++;
  }

  // Check for diagonal win from top-right to bottom-left
  i = row - Math.min(row, 6 - col);
  j = col + Math.min(row, 6 - col);
  count = 0;
  const indexesRTL = [];

  while (i <= 5 && j >= 0) {
    if (gameState[i * 7 + j] === playerTurn) {
      count++;
      indexesRTL.push(i * 7 + j);
    } else {
      count = 0;
      indexesRTL.length = 0;
    }

    if (count === 4) {
      wins[playerTurn - 1] ++
      setWins(wins);
      setWinner(playerTurn);
      setConnected(indexesRTL);
      return;
    }

    i++;
    j--;
  }
};