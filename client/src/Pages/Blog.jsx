import { useEffect } from 'react'
import Footer from '../Components/Helpers/Footer'
import QuickNav from '../Components/Helpers/QuickNav'
import Menu from '../Components/Helpers/Menu'

function Blog({setSelectedCard}) {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

}, []);

  return (
    <div>
        <Menu setSelectedCard={setSelectedCard} />
        <div className="mt-[70px]">
            <QuickNav setSelectedCard={setSelectedCard} />
        </div>
        
        <div className='mt-[110px]'>
      BLog

        </div>

      <Footer />
    </div>
  )
}

export default Blog
