import logo from "./assets/images/logo.svg"
import pvp from "./assets/images/player-vs-player.svg"
import { Link } from "react-router-dom"


export const Main = () => {
  return(
    <div className="flex w-screen h-screen bg-purple sm:bg-darkerpurple justify-center items-center">
      <div className="flex flex-col items-center gap-8 sm:w-[480px] sm:h-[435px] sm:bg-purple sm:pt-16 sm:border-4 sm:rounded-[40px] sm:shadow-shadd">
        <img src={logo} className="w-[52px] h-[52px] mb-10"></img>
        <Link to="/game">
          <button className="flex h-[72px] justify-between bg-yellow rounded-[20px] w-[335px] sm:w-[400px] pl-4 pr-3 border-4 shadoww text-2xl menubutton duration-150 items-center">
                  <h1>PLAY VS PLAYER</h1>
                  <img src={pvp}></img>
                </button>
        </Link>
        
      <Link to="/rules">
        <button className="flex items-center px-3 bg-white rounded-[20px] h-[72px] w-[335px] sm:w-[400px] py-[20px] border-4 shadoww text-2xl menubutton duration-150" >GAME RULES</button>
      </Link>
        
      </div>
    </div>
  )
}