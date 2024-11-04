import ConsultationCategory from "../Components/ConsultationUi/ConsultationCategory"
import Banner from "../Components/Helpers/Banner"
import Footer from "../Components/Helpers/Footer"
import Menu from "../Components/Helpers/Menu"
import QuickNav from "../Components/Helpers/QuickNav"

function Consultations({ setSelectedCard }) {
  return (
    <div>
      <Menu setSelectedCard={setSelectedCard} />
      <div className="mt-[70px]">
          <QuickNav setSelectedCard={setSelectedCard} />
      </div>
      <div className="mt-[30px]">
          <Banner
            video={'https://videos.pexels.com/video-files/3772777/3772777-sd_640_360_24fps.mp4'} 
            text={'Community'}
          />
      </div>

      <ConsultationCategory />


      <Footer />

    </div>
  )
}

export default Consultations
