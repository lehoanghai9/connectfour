import marker1 from "../assets/images/marker-red.svg"
import marker2 from "../assets/images/marker-yellow.svg"
import { GameContext } from "./contexts/GameContexts";
import { useContext } from "react";

export const DropBar = () => {

  const isFull = (gamestate, index) => {
    return(
      gamestate.slice(0,7)[index] !== 0 ? true : false
      )
  }

  const {selectedColumn, playerTurn, gameState, connected, winner} = useContext(GameContext)

  const images = Array.from({ length: 7 }, (_, i) => (
    <div className="flex justify-center" key={i}>
      {selectedColumn === i && !isFull(gameState, i) && connected.length !== 4 && winner === 0 ? <img src={playerTurn === 1 ? marker1 : marker2} alt=""  className="hidden lg:flex "/> : null}
    </div>
  ));

  return (
    <div className="w-full px-1 sm:px-2 grid grid-cols-7 grid-rows-1 justify-center h-[36px] max-w-[632px]">
      {images}
    </div>
  );
};