import { useContext } from "react"
import { GameContext } from "./contexts/GameContexts"
import { Link } from "react-router-dom";

export const PausedMenu = () => {

  const {paused, setPaused, setGameState, setWinner, setConnected, initialState, setSeconds} = useContext(GameContext);
  const pausedToggle = () => {
    setPaused(!paused)
  }

  const restart = () => {
    setGameState(initialState);
    setWinner(0);
    setConnected([]);
    setSeconds(30);
  } 

  const handleRestartAndToggle = () => {
    restart();
    pausedToggle();
  }


  return (
    <div>
      {paused && (
        <div className="modal w-screen h-screen top-0 left-0 right-0 bottom-0 fixed z-[50]">
          <div
            className="overlay w-screen h-screen top-0 left-0 right-0 bottom-0 fixed bg-grey opacity-80 z-[50]"
            onClick={pausedToggle}
          ></div>
          <div className="modal-content flex flex-col justify-center items-center w-[335px] sm:w-[500px]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple rounded-[40px] z-[150] border-4 shadoww py-[30px] sm:py-[50px] gap-[30px]">

            <h1 className="text-white text-center  text-[3.5rem]">PAUSE</h1>

            <button className="bg-white rounded-[20px] w-[300px] sm:w-[400px] py-[20px] border-4 shadoww text-2xl menubutton duration-150" onClick={() => setTimeout(pausedToggle, 100)}>CONTINUE GAME</button>

            <button className="bg-white rounded-[20px] w-[300px] sm:w-[400px] py-[20px] border-4 shadoww text-2xl menubutton duration-150" onClick={() => setTimeout(handleRestartAndToggle, 100)}>RESTART</button>
            <Link to="/">
              <button className="bg-red rounded-[20px] w-[300px] sm:w-[400px] py-[20px] border-4 shadoww text-2xl menubutton duration-150">QUIT GAME</button>
            </Link>
            
          </div>
        </div>
      )}
    </div>
  );
  
  
}