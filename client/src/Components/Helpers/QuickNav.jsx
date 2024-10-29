import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function QuickNav({setSelectedCard}) {
  const cart = useSelector(state => state.cart)
  return (
    <div className="z-40 flex items-center h-[20px] justify-between py-[18px] pad1 bg-main-color-dark fixed top-[70px] left-0 w-full">
      <marquee className={`text-white font-semibold`}>
        Blog Headlines....
        </marquee>
        <div className='flex items-center ml-auto gap-10 phone:gap-6'>
            <Link onClick={() => setSelectedCard('shoppingCart')} className="relative text cursor-pointer  text-color-1 hover:text-white duration-200">
                <MdOutlineShoppingCart className="text-[28px]" />
                {
                  cart.products?.length >= 1 && (
                    <span className="absolute top-[-1px] right-[-5px] bg-color-1 rounded-full h-[20px] w-[20px] flex items-center justify-center p-[1px] text-main-color">{cart.products?.length > 10 ? '9+' : `${cart.products?.length}` }</span>
                  )
                }
            </Link>

            <Link onClick={() => setSelectedCard('authenticate')} className="text cursor-pointer  text-color-1 hover:text-white duration-200">
                <IoPersonCircleOutline className="text-[28px]" />
            </Link>
        </div>
    </div>
  )
}

export default QuickNav