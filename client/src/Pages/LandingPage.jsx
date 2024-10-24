import BlogSection from "../Components/Helpers/BlogHero"
import ChurchValues from "../Components/Helpers/ChurchValues"
import Footer from "../Components/Helpers/Footer"
import Hero from "../Components/Helpers/Hero"
import Menue from "../Components/Helpers/Menu"
import Navbar from "../Components/Helpers/Navbar"
import OurCampaign from "../Components/Helpers/OurCampaign"
import QuickNav from "../Components/Helpers/QuickNav"
import StatementOfFaith from "../Components/Helpers/StatmentofFaith"
import TestimonialsSection from "../Components/Helpers/TestimonalSection"
import UpcomingEvents from "../Components/UpcomingEvents"

function LandingPage({setSelectedCard}) {
    const upcomingEventData = ''
  return (
    <div className="page">
        <Menue />
        {/* <Navbar setSelectedCard={setSelectedCard} /> */}
        <div className="mt-[70px]">
            <QuickNav setSelectedCard={setSelectedCard} />
        </div>

        <div className="mt-[30px]">
            <Hero />
        </div>

        <div className='mt-[30px]' >
            <UpcomingEvents data={upcomingEventData} />
        </div>
        <StatementOfFaith />
     
        <OurCampaign />

        <TestimonialsSection />

<BlogSection />

        <div className="mt-auto">
            <Footer />
        </div>
    </div>
  )
}

export default LandingPage