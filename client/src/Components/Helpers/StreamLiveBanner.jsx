import { FaPlay } from 'react-icons/fa'
import { PiHandsPrayingFill } from "react-icons/pi";
import BgImg from '../../assests/prayerbg.jpg'
import { Link } from 'react-router-dom'

function StreamLiveBanner() {
  return (
    <div className='relative bg-white h-[600px]'>
    <div className="absolute w-full h-full bg-[#000000CC] left-0 top-0 z-10"></div>
    <img alt='prayer bg' src={BgImg} className='absolute w-full h-full top-0 left-0 object-cover object-center' />
      <div className='pad1 relative w-full h-full z-50 flex flex-col gap-8 items-center justify-center'>
            <Link 
                to='/live' 
                className={`flex items-center justify-center gap-2 py-3 phone:py-2 px-20 small-pc:px-9 tablet:px-8 link text-text-color-2 text-[18px] tablet:text-[16px] duration-300 border-[2px] border-color-1 bg-color-1 hover:text-white`}
            >
                <FaPlay className='' />
                Live Stream
            </Link>

            <Link 
                to='' 
                className={`flex items-center justify-center gap-2 py-3 phone:py-2 px-20 small-pc:px-9 tablet:px-8 link text-text-color-2 text-[18px] tablet:text-[16px] duration-300 border-[2px] border-color-1 bg-color-1 hover:text-white`}
            >
                <PiHandsPrayingFill className='' />
                Prayer Point
            </Link>

      </div>
    </div>
  )
}

export default StreamLiveBanner

