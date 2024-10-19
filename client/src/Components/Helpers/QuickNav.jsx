import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

function QuickNav({setSelectedCard}) {
  return (
    <div className="z-[99] flex items-center h-[20px] justify-between py-[18px] pad1 bg-main-color-dark fixed top-[70px] left-0 w-full">
        <div className='flex items-center ml-auto gap-10'>
            <Link onClick={() => setSelectedCard('shoppingCart')} className="text cursor-pointer  text-color-1 hover:text-white duration-200">
                <MdOutlineShoppingCart className="text-[28px]" />
            </Link>

            <Link onClick={() => setSelectedCard('authenticate')} className="text cursor-pointer  text-color-1 hover:text-white duration-200">
                <IoPersonCircleOutline className="text-[28px]" />
            </Link>
        </div>
    </div>
  )
}

export default QuickNav