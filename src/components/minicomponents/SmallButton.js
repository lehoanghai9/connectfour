
export const SmallButton = (props) => {
  return(
    <button className="h-[40px] text-center bg-darkerpurple text-white capitalize rounded-[20px] px-[20px] hover:bg-red duration-300" onClick={props.do}>{props.text}</button>
  )
}