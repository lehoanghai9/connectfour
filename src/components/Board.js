import largelayerblack from "../assets/images/board-layer-black-large.svg"
import largelayerwhite from "../assets/images/board-layer-white-large.svg"
import smalllayerblack from "../assets/images/board-layer-black-small.svg"
import smalllayerwhite from "../assets/images/board-layer-white-small.svg"
import player1 from "../assets/images/player-one.svg"
import player2 from "../assets/images/player-two.svg"
import { useContext, useEffect } from "react"
import { GameContext } from "./contexts/GameContexts"
import { Cells } from "./Cells"
import { DropBar } from "./DropBar"
import { Bottom } from "./Bottom"
import { PausedMenu } from "./PausedMenu"

export const Board = () => {

  const {playerTurn, setWins, wins, winner, setWinner, paused, seconds, setSeconds, draw, isWonOrDraw} = useContext(GameContext)

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      if (!paused && !draw && seconds && !isWonOrDraw > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    if (seconds <= 0) {
      clearInterval(countdownTimer);
      if (playerTurn === 2) {
        setWinner(1);
        wins[0]++;
        setWins(wins);
      } else {
        setWinner(2);
        wins[1]++;
        setWins(wins);
      }
    }

    return () => clearInterval(countdownTimer);
  }, [seconds, paused]);

  return(
    <div className="relative">

      <PausedMenu/>

      <div className="hidden lg:flex flex-col absolute left-[-200px] top-[220px] w-[140px] h-[160px] bg-white rounded-[20px] border-4 shadoww items-center">
        <img src={player1} className={`${playerTurn === 1 && winner === 0 && paused === false && !isWonOrDraw ? "bouncey" : ""} w-[54px] h-[59px] mt-[-30px]`} alt=""></img>
        <h2 className="text-center text-xl mt-2">PLAYER 1</h2>
        <h1 className="text-center text-6xl mt-1">{wins[0]}</h1>
      </div>
      
      <div className="hidden lg:flex flex-col absolute right-[-200px] top-[220px] w-[140px] h-[160px] bg-white rounded-[20px] border-4 shadoww items-center">
      <img src={player2} className={`w-[54px] h-[59px] mt-[-30px] ${playerTurn === 2 && winner === 0 && paused === false && !isWonOrDraw ? "bouncey" : ""}`} alt=""></img>
        <h2 className="text-center text-xl mt-2">PLAYER 2</h2>
        <h1 className="text-center text-6xl mt-1">{wins[1]}</h1>

      </div>
      <DropBar/>

      <div className=" hidden sm:grid relative w-[632px] h-[584px] select-none grid-rows-6 grid-cols-7 pb-12 px-2 pt-2">

        
        {Cells()}
        <img src={largelayerblack} className="absolute hidden sm:flex z-10 select-none" alt=""></img>
        <img src={largelayerwhite} className="absolute hidden sm:flex  z-30 select-none" alt=""></img>
        
      </div>
      

      <div className="sm:hidden grid relative w-[335px] h-[310px] select-none grid-rows-6 grid-cols-7 pb-6 px-1 pt-1">
      {Cells()}
        <img src={smalllayerblack} className="absolute sm:hidden z-10 select-none" alt=""></img>
        <img src={smalllayerwhite} className="absolute sm:hidden z-30 select-none" alt=""></img>
        
      </div>

      <Bottom/>
    </div>
    
  )
}