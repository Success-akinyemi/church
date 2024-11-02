import Footer from '../Components/Helpers/Footer'
import Menu from '../Components/Helpers/Menu'
import Banner from '../Components/Helpers/Banner'
import QuickNav from '../Components/Helpers/QuickNav'
import LiveMessage from '../Components/SermonUi/LiveMessage'
import PreviousMessages from '../Components/SermonUi/PreviousMessages'
import { useEffect, useState } from 'react'

function Sermon({ setSelectedCard }) {
  const [ activeCard, setActiveCard ] = useState('livemessages')
  
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

}, []);

  const toggleCard = (cardValue) => {
    setActiveCard(cardValue)
  }


    return (
      <div className='page'>
          <Menu setSelectedCard={setSelectedCard} />
          <div className="mt-[70px]">
              <QuickNav setSelectedCard={setSelectedCard} />
          </div>
  
          <div className="mt-[30px]">
              <Banner 
                video={'https://videos.pexels.com/video-files/3772777/3772777-sd_640_360_24fps.mp4'} 
                text={'Live Streaming'}
              />
          </div>
          <div className="w-full pad1 bg-main-color flex items-center justify-center gap-[2px] flex-wrap tablet:text-[14px]">
          <div onClick={() => toggleCard('livemessages')} className={`cursor-pointer flex flex-1 text-center items-center justify-center border-b-[4px] ${activeCard === 'livemessages' ? 'border-b-white' : 'border-b-transparent'} hover:border-b-white ${activeCard === 'livemessages' ? 'text-white' : 'text-text-white'} hover:text-white`}>
              <p className={`text-center font-semibold text-[24px] phone:text-[17px] `}>Live Streaming</p>
          </div>
          <div onClick={() => toggleCard('previousmessages')} className={`cursor-pointer flex flex-1 text-center items-center justify-center border-b-[4px] ${activeCard === 'previousmessages' ? 'border-b-white' : 'border-b-transparent'} hover:border-b-white ${activeCard === 'previousmessages' ? 'text-white' : 'text-text-white'} hover:text-white`}>
              <p className={`text-center font-semibold text-[24px] phone:text-[17px] `}>Previous Messages</p>
          </div>
        </div> 

        <div>
            {
            activeCard === 'livemessages' && (
              <LiveMessage />
            )
          }
          {
            activeCard === 'previousmessages' && (
              <PreviousMessages />
            )
          }
        </div>
  
  
  
          <div className="mt-auto">
              <Footer />
          </div>
      </div>
    )
  }

export default Sermon
