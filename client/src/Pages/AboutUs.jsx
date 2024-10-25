import { useState } from "react"
import Banner from "../Components/Helpers/Banner"
import Menu from "../Components/Helpers/Menu"
import QuickNav from "../Components/Helpers/QuickNav"
import Minstry from "../Components/AboutUi/Minstry"
import AboutFada from "../Components/AboutUi/AboutFada"

function AboutUs({ setSelectedCard }) {
  const [ activeCard, setActiveCard ] = useState('ministry')

  const toggleCard = (cardValue) => {
    setActiveCard(cardValue)
  }

  return (
    <div className="page">
              <Menu setSelectedCard={setSelectedCard} />
        <div className="mt-[70px]">
            <QuickNav setSelectedCard={setSelectedCard} />
        </div>

        <div className="mt-[30px]">
            <Banner 
              video={'https://videos.pexels.com/video-files/3772777/3772777-sd_640_360_24fps.mp4'} 
              text={'About Us'}
            />
        </div>

        <div className="flex items-center justify-center mt-6 text-[24px] gap-4 font-semibold">
          <div onClick={() => setActiveCard('ministry')} className={`cursor-pointer border-b-2 hover:`}>Ministry</div>
          <div onClick={() => setActiveCard('fada')} className={`cursor-pointer border-b-2 hover:`}>FADA</div>
        </div>

        <div>
          {
            activeCard === 'ministry' && (
              <Minstry />
            )
          }
          {
            activeCard === 'fada' && (
              <AboutFada />
            )
          }
        </div>
    </div>
  )
}

export default AboutUs
