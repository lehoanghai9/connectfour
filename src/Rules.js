import { Link } from "react-router-dom"
import check from "./assets/images/icon-check.svg"

export const Rules = () => {
  return(
    <div className=" flex justify-center items-center h-screen">
      <div className="flex flex-col relative w-[335px] sm:w-[480px] sm:px-9 bg-white border-4 shadow-shadd rounded-[40px] px-5 pt-8">
        <h1 className="text-center text-[3.5rem] mb-8">RULES</h1>
        <h2 className="text-purple text-xl mb-4">OBJECTIVE</h2>
        <p className="text-p mb-8">Be the first player to connect 4 of the same colored discs in a row (either 
  vertically, horizontally, or diagonally).</p>

    <h2 className="text-purple text-xl mb-4">HOW TO PLAY</h2>

      <div className="flex flex-col gap-2">
        <div className="flex gap-5">
      <h3>1</h3>
      <p className="text-p">Red goes first in the first game.</p>
    </div>

    <div className="flex gap-5">
      <h3>2</h3>
      <p className="text-p">Players must alternate turns, and only one disc can be dropped in each turn. </p>
    </div>

    <div className="flex gap-5">
      <h3>3</h3>
      <p className="text-p">The game ends when there is a 4-in-a-row or a stalemate.</p>
    </div>

    <div className="flex gap-5">
      <h3>4</h3>
      <p className="text-p">The starter of the previous game goes second on the next game.</p>
    </div>
      </div>
      <div className="self-center mb-[-40px] mt-6">
        <Link to="/"><button className=" rulebutton duration-100 rounded-full">
            <img src={check}/>
          </button></Link>
      </div>
    
    
      </div>
    </div>
  )
}