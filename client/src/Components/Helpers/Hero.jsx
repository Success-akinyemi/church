import { Link } from 'react-router-dom'
import { FaPlay } from "react-icons/fa";

function Hero() {
  return (
    <div className='w-full h-[90vh] relative'>
        <div className='absolute pad1 w-full h-full z-20 bg-transparent-bg left-0 top-0 flex flex-col justify-center'>
            <h1 className='text-[48px] small-pc:text-[36px] tablet:text-[32px] phone:text-[32px] text-white '>    
                Live Prayer Session. <br /> Connect With Fada Everyday.
            </h1>

            <div className='flex items-center gap-3 mt-8 smaller-phone:flex-col'>

                <Link 
                    to='/live' 
                    className={`flex items-center justify-center gap-3 py-3 phone:py-2 px-16 small-pc:px-14 tablet:px-14 link text-text-color-2 text-[18px] tablet:text-[16px] duration-300 border-[2px] border-color-1 bg-color-1 hover:text-white`}
                >
                    <FaPlay className='' />
                    Live
                </Link>
            </div>
        </div>
        <p></p>

        <video src='https://videos.pexels.com/video-files/1722697/1722697-sd_640_360_25fps.mp4' autoPlay muted 
            className='z-10 w-full h-full object-cover object-center'>

        </video>

    </div>
  )
}

export default Hero