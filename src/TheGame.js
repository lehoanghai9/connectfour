
import React, { useState } from 'react';
import './App.css';
import { Board } from './components/Board';
import { Menu } from './components/Menu';
import { GameContext } from './components/contexts/GameContexts';
import { PlayerBarMobile } from './components/PlayerBarMobile';
import { BigBottomThing } from './components/BigBottomThing';

export default function TheGame() {
  const [selectedColumn, setSelectedColumn] = useState(null);
  const [connected, setConnected] = useState([])
  const [wins, setWins] = useState([0, 0]);
  const [winner, setWinner] = useState(0);
  const [paused, setPaused] = useState(false);
  const [seconds, setSeconds] = useState(30);
  const [draw, setDraw] = useState(false);
  
  const initialState = [
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ]

  const [gameState, setGameState] = useState(initialState);

  const [playerTurn, setPlayerTurn] = useState(1);

  let isWonOrDraw = winner !== 0 || (gameState.slice(0, 7).every(element => element !== 0) && winner === 0)

  const turnChange = () => {
    if (playerTurn === 1){
      setPlayerTurn(2)
    } else {
      setPlayerTurn(1)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center ">
      <div>
        <GameContext.Provider value={{selectedColumn, setSelectedColumn, initialState, gameState, setGameState, playerTurn, turnChange, connected, setConnected, wins, setWins, winner, setWinner, paused, setPaused, seconds, setSeconds, draw, setDraw, isWonOrDraw}}>
          <Menu/>
          <PlayerBarMobile/>
          <Board/>
          <BigBottomThing/>
        </GameContext.Provider>
      </div>
    </div>
  );
}
