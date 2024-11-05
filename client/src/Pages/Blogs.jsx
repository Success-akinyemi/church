import { useEffect } from 'react'
import Menu from '../Components/Helpers/Menu'
import QuickNav from '../Components/Helpers/QuickNav'
import Banner from '../Components/Helpers/Banner'
import { blogs } from '../data/blogs'
import BlogSection from '../Components/Helpers/BlogHero'
import Footer from '../Components/Helpers/Footer'

function Blogs({setSelectedCard}) {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

}, []);

    const blogData = blogs
  return (
    <div>
        <Menu setSelectedCard={setSelectedCard} />
        <div className="mt-[70px]">
            <QuickNav setSelectedCard={setSelectedCard} />
        </div>

        <div className="mt-[30px]">
            <Banner
              video={'https://videos.pexels.com/video-files/3772777/3772777-sd_640_360_24fps.mp4'} 
              text={'Blogs'}
            />
        </div>

        <BlogSection data={blogData} pagination={true} noPerPage={3} />

        <Footer />
    </div>
  )
}

export default Blogs
