import Logo from "./Logo"

function Footer() {
  return (
    <div className="w-full bg-main-color py-8 pad1 flex flex-col">
        <div>
            <Logo />

        </div>

        <div className="flex items-center justify-center text-center text-white">
            By Success 
        </div>
    </div>
  )
}

export default Footer