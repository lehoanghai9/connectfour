

export const CheckHorizontalWin = ({placedIndex, gameState, playerTurn, setConnected, wins, setWins, winner, setWinner}) => {
  let min = ~~(placedIndex / 7)*7;
  let max = min + 6;
  let row = gameState.slice(min, max+1);

  for (let i = 0; i < row.length - 3; i++) {
    if (row[i] === playerTurn && row[i+1] === playerTurn && row[i+2] === playerTurn && row[i+3] === playerTurn) {
      wins[playerTurn - 1] ++;
      setWins(wins);
      setWinner(playerTurn);
      const indexes = [min + i, min + i + 1, min + i + 2, min + i + 3];
      setConnected(indexes);
      return;
    }
  }
}