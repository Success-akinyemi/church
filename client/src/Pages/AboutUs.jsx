import { useEffect, useState } from "react"
import Banner from "../Components/Helpers/Banner"
import Menu from "../Components/Helpers/Menu"
import QuickNav from "../Components/Helpers/QuickNav"
import Minstry from "../Components/AboutUi/Minstry"
import AboutFada from "../Components/AboutUi/AboutFada"
import Branches from "../Components/AboutUi/Branches"
import AboutHGFPMI from "../Components/AboutUi/AboutHGFPMI"
import VideoSrc from '../assests/Vid/heroVid.mp4'

function AboutUs({ setSelectedCard }) {
  const [ activeCard, setActiveCard ] = useState('abouthgfmi')

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

        <div className="w-full pad1 bg-main-color flex items-center justify-center gap-[2px] flex-wrap tablet:text-[14px]">
          <div onClick={() => toggleCard('abouthgfmi')} className={`cursor-pointer flex flex-1 items-center justify-center border-b-[4px] ${activeCard === 'abouthgfmi' ? 'border-b-color-1' : 'border-b-white'} hover:border-b-color-1 ${activeCard === 'abouthgfmi' ? 'text-color-1' : 'text-white'} hover:text-color-1`}>
              <p className={`text-center uppercase font-semibold text-[24px] phone:text-[16px] `}>About HGFPMI</p>
          </div>
          <div onClick={() => toggleCard('fada')} className={`cursor-pointer flex flex-1 items-center justify-center border-b-[4px] ${activeCard === 'fada' ? 'border-b-color-1' : 'border-b-white'} hover:border-b-color-1 ${activeCard === 'fada' ? 'text-color-1' : 'text-white'} hover:text-color-1`}>
              <p className={`text-center uppercase font-semibold text-[24px] phone:text-[16px] `}>FADA</p>
          </div>
          <div onClick={() => toggleCard('ministry')} className={`cursor-pointer flex flex-1 items-center justify-center border-b-[4px] ${activeCard === 'ministry' ? 'border-b-color-1' : 'border-b-white'} hover:border-b-color-1 ${activeCard === 'ministry' ? 'text-color-1' : 'text-white'} hover:text-color-1`}>
              <p className={`text-center uppercase font-semibold text-[24px] phone:text-[16px] `}>Leaders</p>
          </div>
          <div onClick={() => toggleCard('branches')} className={`cursor-pointer flex flex-1 items-center justify-center border-b-[4px] ${activeCard === 'branches' ? 'border-b-color-1' : 'border-b-white'} hover:border-b-color-1 ${activeCard === 'branches' ? 'text-color-1' : 'text-white'} hover:text-color-1`}>
              <p className={`text-center uppercase font-semibold text-[24px] phone:text-[16px] `}>Branches</p>
          </div>
        </div> 

        <div>
          {
            activeCard === 'abouthgfmi' && (
              <AboutHGFPMI />
            )
          }
          {
            activeCard === 'fada' && (
              <AboutFada />
            )
          }
          {
            activeCard === 'ministry' && (
              <Minstry />
            )
          }
          {
            activeCard === 'branches' && (
              <Branches />
            )
          }
        </div>
    </div>
  )
}

export default AboutUs
