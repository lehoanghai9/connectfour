import turnbgred from "../assets/images/turn-background-red.svg"
import turnbgyellow from "../assets/images/turn-background-yellow.svg"
import { useContext } from "react"
import { GameContext } from "./contexts/GameContexts"
import { SmallButton } from "./minicomponents/SmallButton"

export const Bottom = () => {

  const restart = () => {
    setGameState(initialState);
    setWinner(0);
    setConnected([]);
    setSeconds(30);
    isWonOrDraw = false;
  } 

  const {gameState, playerTurn, winner, setGameState, initialState, setConnected, setWinner, seconds, setSeconds, isWonOrDraw} = useContext(GameContext);

  return (
    gameState.slice(0, 7).every(element => element !== 0) && winner === 0 ? (
      <div className="relative flex justify-center mt-[-20px] sm:mt-[-40px] w-full">
      <div className="my-div flex flex-col absolute w-[285px] h-[160px] bg-white z-40 border-4 rounded-[20px] shadoww items-center " style={{ animation: "fade-in 0.5s ease-in-out forwards" }}>
        <h1 className="text-[3.25rem] text-center mt-[10px]">DRAW</h1>
        <div className="flex w-[140px] mt-[] justify-center">
          <SmallButton text="PLAY AGAIN" className="bg-yellow" do={restart} />
        </div>
      </div>
    </div>
    ) : ( winner !==0 ? (
      <div className="relative flex justify-center mt-[-20px] sm:mt-[-40px] w-full">
      <div className="my-div flex flex-col absolute w-[285px] h-[160px] bg-white z-40 border-4 rounded-[20px] shadoww items-center " style={{ animation: "fade-in 0.5s ease-in-out forwards" }}>
        <h1 className="text-center mt-3">Player {winner}</h1>
        <h1 className="text-[3.25rem] text-center mt-[-10px]">WINS</h1>
        <div className="flex w-[140px] mt-[-5px] justify-center">
          <SmallButton text="PLAY AGAIN" className="bg-yellow" do={restart} />
        </div>
      </div>
    </div>
    ) : (
      <div className="flex relative bottom-0 left-0 w-full justify-center mt-[-20px] sm:mt-[-40px]">
      <img src={playerTurn === 1 ? turnbgred : turnbgyellow} className="z-40 select-none" alt=""/>
      <div className={`absolute z-40 top-10 ${playerTurn === 1 ? "text-white" : ""}`}>
        <h2 className="text-base">PLAYER {playerTurn}'S TURN</h2>
        <h1 className="text-center text-5xl mt-2">{seconds}s</h1>
      </div>
    </div>
    )
    )
  );
}
