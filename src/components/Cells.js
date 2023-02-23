import { PlaceItem } from "./minicomponents/PlaceItem";
import React from "react";
import { GameContext } from "./contexts/GameContexts";
import { useContext } from "react";
import golyored from "../assets/images/counter-red-large.svg"
import golyoyellow from "../assets/images/counter-yellow-large.svg"

export const Cells = () => {

  const { gameState, setGameState, setSelectedColumn, selectedColumn, playerTurn, turnChange, connected, setConnected, wins, setWins, winner, setWinner, setSeconds } = useContext(GameContext);

  const divs = [];

  for (let i = 0; i < 42; i++) {
    divs.push(
      <div
        key={i}
        onMouseEnter={() => setSelectedColumn(i % 7)}
        onMouseLeave={() => setSelectedColumn(null)}
        onClick={() => {PlaceItem({ gameState, setGameState, setSelectedColumn, selectedColumn, playerTurn, turnChange, setConnected, connected, wins, setWins, winner, setWinner, setSeconds })}}
        className="flex relative cursor-pointer px-1 sm:px-2 sm:py-2  justify-center items-center"
      >
        {gameState[i] === 1 ? (
          <img src={ golyored} className={`z-20 mt-[3px] sm:mt-[5px] w-sm:[72px] sm:h-[72px] drop`} alt=""></img>
        ) : gameState[i] === 2 ? (<img src={ golyoyellow} className={`z-20 mt-[3px] sm:mt-[5px] w-sm:[72px] sm:h-[72px] drop`} alt=""></img>) : null }
        
        {connected.includes(i) ? (<div className="absolute w-[20px] h-[20px] sm:w-[34px] sm:h-[34px] border-[6px] border-white rounded-full z-40 animate-pulse"></div>) : ""}
        
        
        </div>
    );
  }
  return divs
}