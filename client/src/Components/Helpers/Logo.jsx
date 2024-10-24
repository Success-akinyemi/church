import { Link } from "react-router-dom"

function Logo() {
  return (
    <Link to='/' className="link text-white text-[28px] h-full flex items-center gap-2">
        <hr className="w-[2px] h-full bg-white border-none" />
        <div className="flex flex-col font-font-2">
          <h3 className="font-semibold txt-[21px]">Chruch</h3>
          <p className="font-light text-[15px] mt-[-12px]">Ministries</p>
        </div>
    </Link>
  )
}

export default Logo