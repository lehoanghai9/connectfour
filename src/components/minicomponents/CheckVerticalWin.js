
export const CheckVerticalWin = ({ placedIndex, selectedColumn, gameState, playerTurn, setConnected, setWins, wins, setWinner }) => {
  const columnIndex = placedIndex % 7;
  const column = gameState.filter((_, index) => index % 7 === columnIndex);

  if (column.length < 4) {
    return;
  }

  for (let i = 0; i <= column.length - 4; i++) {
    if (
      column[i] === playerTurn &&
      column[i + 1] === playerTurn &&
      column[i + 2] === playerTurn &&
      column[i + 3] === playerTurn
    ) {
      wins[playerTurn - 1] ++
      setWins(wins);
      setWinner(playerTurn)
      const indexes = [
        columnIndex + i * 7,
        columnIndex + (i + 1) * 7,
        columnIndex + (i + 2) * 7,
        columnIndex + (i + 3) * 7,
      ];
      setConnected(indexes);
      return;
    }
  }
};