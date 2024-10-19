import { Link } from 'react-router-dom'
import HeroVid from '../../assets/videos/heroVideo.mp4'
import { useState } from 'react'

function Hero() {
    const [ hoverState, setHoverState ] = useState(false)
  return (
    <div className='w-full h-[60vh] relative'>
        <div className='absolute pad1 w-full h-full z-20 bg-transparent-bg left-0 top-0 flex flex-col justify-center'>
            <h1 className='text-[48px] text-white '>    
                Live inspired. Reach your dreams. <br /> Become all God created you to be.
            </h1>

            <div className='flex items-center gap-3 mt-8'>
                <Link 
                    to='' 
                    className={`flex items-center justify-center text-center py-2 px-8 rounded-[8px] link text-text-color-2 text-[18px] duration-300 border-[2px] border-white ${hoverState ? 'bg-white' : 'bg-transparent'}`}
                    onMouseEnter={() => setHoverState(false)}
                    onMouseLeave={() => setHoverState(true)}
                >
                    Todays Offer
                </Link>

                <Link 
                    to='' 
                    className={`flex items-center justify-center text-center py-2 px-8 rounded-[8px] link text-text-color-2 text-[18px] duration-300 border-[2px] border-white ${!hoverState ? 'bg-white' : 'bg-transparent'}`}
                    onMouseEnter={() => setHoverState(true)}
                    onMouseLeave={() => setHoverState(false)}
                >
                    Daily Insipration
                </Link>
            </div>
        </div>
        <p></p>

        <video src='https://videos.pexels.com/video-files/1722697/1722697-sd_640_360_25fps.mp4' autoPlay muted 
            className='w-full h-full object-cover object-center'>

        </video>

    </div>
  )
}

export default Hero