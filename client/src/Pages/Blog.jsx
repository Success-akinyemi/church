import React from 'react'
import Footer from '../Components/Helpers/Footer'
import QuickNav from '../Components/Helpers/QuickNav'
import Menu from '../Components/Helpers/Menu'

function Blog({setSelectedCard}) {
  return (
    <div>
        <Menu setSelectedCard={setSelectedCard} />
        <div className="mt-[70px]">
            <QuickNav setSelectedCard={setSelectedCard} />
        </div>
      BLog

      <Footer />
    </div>
  )
}

export default Blog
