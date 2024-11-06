import { FaPlay } from "react-icons/fa";

function LiveMessage() {
  return (
    <div className="pad1 mt-8 mb-16 flex items-center justify-center">
      <div className="w-[850px] small-pc:w-[95%] h-[500px] shadow-xl border-[2px] border-main-color rounded-[10px] flex items-center justify-center relative">
        <div className=" flex items-center justify-center p-8 bg-main-color text-white rounded-full ">
          <FaPlay className="text-[32px]" />
        </div>
      </div>
    </div>
  )
}

export default LiveMessage
