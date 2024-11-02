import { useEffect } from "react"
import Banner from "../Components/Helpers/Banner"
import Footer from "../Components/Helpers/Footer"
import Menu from "../Components/Helpers/Menu"
import QuickNav from "../Components/Helpers/QuickNav"
import ProgramsAndEventCategory from "../Components/ProgramsAndEventsUi/ProgramsAndEventCategory"

function ProgramsAndEvents({setSelectedCard}) {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    
    }, []);

  return (
    <div className='page'>
        <Menu setSelectedCard={setSelectedCard} />
        <div className="mt-[70px]">
            <QuickNav setSelectedCard={setSelectedCard} />
        </div>

        <div className="mt-[30px]">
            <Banner 
              video={'https://videos.pexels.com/video-files/3772777/3772777-sd_640_360_24fps.mp4'} 
              text={'Programs And Events'}
            />
        </div>
        <ProgramsAndEventCategory />



        <div className="mt-auto">
            <Footer />
        </div>
    </div>
  )
}

export default ProgramsAndEvents
