import player1 from "../assets/images/player-one.svg"
import player2 from "../assets/images/player-two.svg"
import { useContext } from "react"
import { GameContext } from "./contexts/GameContexts"

export const PlayerBarMobile = () => {

  const {wins, playerTurn, winner, paused, isWonOrDraw} = useContext(GameContext)

  return(
    <div className=" relative flex lg:hidden justify-between">
      <div className="flex h-[81px] sm:h-[100px] bg-white border-4 rounded-[20px] shadoww justify-between w-[47%] sm:w-[42%] py-2 pr-8 sm:ml-8">
        <div className="flex items-center ml-[-20px]">
          <img src={player1} className={`w-[54px] h-[59px] ${playerTurn === 1 && winner === 0 && paused === false && !isWonOrDraw ? "bouncey" : ""}`} alt=""></img>
        </div>
        
        <div className="sm:flex items-center ">
          <h1 className="text-center sm:text-xl sm:mr-10">PLAYER 1</h1>
          <h1 className="text-center text-3xl sm:text-6xl">{wins[0]}</h1>
        </div>
        
      </div>
      <div className="flex h-[81px] sm:h-[100px] bg-white border-4 rounded-[20px] shadoww justify-between w-[47%] sm:w-[42%] py-2 pl-8 sm:mr-8">
      <div className="sm:flex items-center">
          <h1 className="text-center sm:text-xl sm:order-2 sm:ml-10">PLAYER 2</h1>
          <h1 className="text-center text-3xl sm:text-6xl">{wins[1]}</h1>
        </div>
        <div className="flex items-center mr-[-20px]">
          <img src={player2} className={`w-[54px] h-[59px] ${playerTurn === 2 && winner === 0 && paused === false && !isWonOrDraw ? "bouncey" : ""}`} alt=""></img>
        </div>
      </div>
    </div>
  )
}