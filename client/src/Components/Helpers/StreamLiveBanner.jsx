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
                className={`bg-main-color text-[24px] phone:text-[18px] text-white font-semibold px-16 phone:px-12 py-4 rounded-full flex items-center gap-3 hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl group`}
            >
                <FaPlay className='' />
                Live Stream
            </Link>

            <Link 
                to='' 
                className={`bg-main-color text-[24px] phone:text-[18px] text-white font-semibold px-16 phone:px-12 py-4 rounded-full flex items-center gap-3 hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl group`}
            >
                <PiHandsPrayingFill className='' />
                Prayer Point
            </Link>

      </div>
    </div>
  )
}

export default StreamLiveBanner

