import { Link } from "react-router-dom"
import Logo from "./Logo"
import { navlinks } from "../../data/navLinks"

function Navbar({setSelectedCard}) {

  const handleDonation = () => {
    setSelectedCard('donations')
  }

  return (
    <div className="z-[999] flex items-center h-[70px] justify-between pt-4 pb-4 pad1 bg-main-color fixed top-0 left-0 w-full">
        <Logo />

        <div className="flex items-center gap-8">
          {
            navlinks.map((item, idx) => (
              <Link onClick={ item.onclick ? handleDonation : null } key={idx} to={`/${item.link}`} className={`link text-white text-[19px] border-b-[2px] border-b-transparent hover:border-b-white duration-200 ${item?.style}`}>{item?.name}</Link>
            ))
          }
        </div>
    </div>
  )
}

export default Navbar