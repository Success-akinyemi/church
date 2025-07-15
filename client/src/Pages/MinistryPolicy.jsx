import { useEffect } from "react"
import Banner from "../Components/Helpers/Banner"
import Menu from "../Components/Helpers/Menu"
import QuickNav from "../Components/Helpers/QuickNav"
import HeroBg from '../assests/hero-bg.jpg'
import { useFetchMisnistryPolicy, useFetchOrders } from "../Helpers/fetch.hooks"
import Footer from "../Components/Helpers/Footer"

function MinistryPolicy({ setSelectedCard }) {
  const { data, isFetching } = useFetchMisnistryPolicy()

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

}, []);


  return (
    <div className="page">
              <Menu setSelectedCard={setSelectedCard} />
        <div className="mt-[70px]">
            <QuickNav setSelectedCard={setSelectedCard} />
        </div>

        <div className="mt-[30px]">
            <Banner 
              text={'Ministry Policy'}
              img={HeroBg}
            />
        </div>

        <div className="w-full mt-[2rem] pad1 bg-main-color flex items-center justify-center gap-[2px] flex-wrap tablet:text-[14px]">

        </div> 

        <div className="mt-auto">
            <Footer />
        </div>
    </div>
  )
}

export default MinistryPolicy
