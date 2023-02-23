import { useContext } from "react"
import { GameContext } from "./contexts/GameContexts"


export const BigBottomThing = () => {

  const {winner} = useContext(GameContext)

  return(
    <div className={`fixed ${winner === 1 ? "bg-red bouncey2 ": winner === 2 ? "bg-yellow bouncey2" : "bg-darkerpurple"} w-screen h-[150px] bottom-0
    left-0 -z-10 rounded-t-[100px] sm:h-[250px] lg:h-[150px] transition-all duration-300`}>

    </div>
  )
}
