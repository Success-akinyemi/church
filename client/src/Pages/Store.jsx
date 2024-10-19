import Navbar from '../Components/Helpers/Navbar'
import QuickNav from '../Components/Helpers/QuickNav'
import Banner from '../Components/Helpers/Banner'
import Footer from '../Components/Helpers/Footer'
import StoreCategory from '../Components/StoreCategory'

function Store({ setSelectedCard }) {
  return (
    <div className='page'>
        <Navbar setSelectedCard={setSelectedCard} />
        <div className="mt-[70px]">
            <QuickNav setSelectedCard={setSelectedCard} />
        </div>

        <div className="mt-[30px]">
            <Banner video={'https://videos.pexels.com/video-files/3772777/3772777-sd_640_360_24fps.mp4'} />
        </div>
        <StoreCategory />



        <div className="mt-auto">
            <Footer />
        </div>
    </div>
  )
}

export default Store