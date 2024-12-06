import { FaPlay } from "react-icons/fa";
import CountdownTimer from "../Helpers/CountdownTimer";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Comments from "./Comments";

function LiveMessage({ countDownTime }) {
  return (
    <div className="pad1 mt-8 mb-16 flex flex-col items-center justify-center">
      
      <div className="mt-4 mb-12">
        <CountdownTimer initialHours={countDownTime} text={'Next Program starts in:'} />
      </div>

      <div className="w-[850px] small-pc:w-[95%] h-[500px] shadow-xl border-[2px] border-main-color rounded-[10px] flex items-center justify-center relative">
        <div className=" flex items-center justify-center p-8 bg-main-color text-white rounded-full ">
          <FaPlay className="text-[32px]" />
        </div>
      
      </div>

      <div className="flex items-center tablet:flex-col justify-center gap-6 mt-12">
        <Link target="_parent" to={`https://www.facebook.com`} className="py-4 px-8 cursor-pointer text-white flex items-center justify-center gap-2 bg-[#1877F2]">
          <FaFacebookF className="text-[20px]" />
          Watch on Facebook
        </Link>
        <Link target="_blank" to={`https://www.tiktok.com`} className="py-4 px-8 cursor-pointer text-white flex items-center justify-center gap-2 bg-[#000000]">
          <FaTiktok className="text-[20px]" />
          Watch on TikTok
        </Link>
      </div>

      {
        /**
         * 
      <div className="w-[50%] my-10">
        <Comments />
      </div>
         */
      }

    </div>
  )
}

export default LiveMessage
