import Footer from "../Components/Helpers/Footer"
import Hero from "../Components/Helpers/Hero"
import Navbar from "../Components/Helpers/Navbar"
import QuickNav from "../Components/Helpers/QuickNav"
import UpcomingEvents from "../Components/UpcomingEvents"

function LandingPage({setSelectedCard}) {
    const upcomingEventData = ''
  return (
    <div className="page">
        <Navbar setSelectedCard={setSelectedCard} />
        <div className="mt-[70px]">
            <QuickNav setSelectedCard={setSelectedCard} />
        </div>

        <div className="mt-[30px]">
            <Hero />
        </div>

        <div className='mt-[30px]' >
            <UpcomingEvents data={upcomingEventData} />
        </div>

        <div className="mt-auto">
            <Footer />
        </div>
    </div>
  )
}

export default LandingPage