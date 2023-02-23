import { SmallButton } from "./minicomponents/SmallButton"
import logo from "../assets/images/logo.svg"
import { useContext } from "react"
import { GameContext } from "./contexts/GameContexts"

export const Menu = () => {
  
  const {setGameState, initialState, setConnected, setWinner, paused, setPaused, setSeconds} = useContext(GameContext)

  const togglePause = () => {
    setPaused(!paused)
  }

  const restart = () => {
    setGameState(initialState);
    setWinner(0);
    setConnected([]);
    setSeconds(30);
  } 

  return(
    <div className="flex justify-between items-center mt-10 mb-8 select-none max-w-[632px]">
      <SmallButton text="MENU" do={togglePause}/>
      <img src={logo} alt="logo"/>

      <SmallButton text="RESTART" do={restart}/>
    </div>
  )
}