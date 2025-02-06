import { useState } from "react"
import { Link } from "react-router-dom"
import LogoImg from '../assests/HGFPMI-LOGO.png'

function HolyGhostPrayerMovement({ setSelectedCard }) {
    const [ formData, setFormData ] = useState({})
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleSubmit = async () => {
        try {
            
        } catch (error) {
            
        }
    }
    return (
      <div className="bg-white flex flex-col min-h-[100vh]">
        <div className="w-full p-3 mb-4">
            <Link to='/'>
                <span className="text-main-color-dark">Return home</span>
            </Link>
        </div>
  
        <div className="flex flex-col items-center justify-center gap-3">
          <img alt="logo" src={LogoImg} className="w-20" />
          <h2 className="uppercase font-semibold text-main-color">
              Holy Ghost Fraternity prayer movement international
          </h2>
          <p className="uppercase text-main-color font-light">
              2025 convention (usa)
          </p>
          <p>
              JUNE - JULY
          </p>
  
          <h3 className="text-main-color border-b-[2px] border-b-matext-main-color mt-8 font-semibold">Please fill the form below</h3>
          <form onSubmit={handleSubmit} className="w-[550px] border flex flex-col gap-5 p-5">
              <div className="flex items-center gap-2 justify-between w-full phone:flex-col">
                  <div className="flex flex-col gap-1">
                      <label className="uppercase label" htmlFor="">Full Name</label>
                      <input onChange={handleChange} type="text" name="fullName" id="fullName" className="input p-2" />
                  </div>
                  <div className="flex flex-col gap-1">
                      <label className="uppercase label" htmlFor="">Mailing Address</label>
                      <input onChange={handleChange} type="text" name="mailingaddress" id="mailingaddress" className="input p-2" />
                  </div>
              </div>
  
              <div className="flex items-center gap-2 justify-between phone:flex-col">
                  <div className="flex flex-col gap-1">
                      <label className="uppercase label" htmlFor="">TELEPHONE</label>
                      <input onChange={handleChange} type="number" name="telephone" id="telephone" className="input p-2" />
                  </div>
                  <div className="flex flex-col gap-1">
                      <label className="uppercase label" htmlFor="">volunteer</label>
                      <input onChange={handleChange} type="text" name="volunteer" id="volunteer" className="input p-2" />
                  </div>
              </div>
  
              <div className="flex items-center gap-2 justify-between phone:flex-col">
                  <div className="flex flex-col gap-1">
                      <label className="uppercase label" htmlFor="">email</label>
                      <input onChange={handleChange} type="email" name="email" id="email" className="input p-2" />
                  </div>
                  <div className="flex flex-col gap-1">
                      <label className="uppercase label" htmlFor="">profession</label>
                      <input onChange={handleChange} type="text" name="fullName" id="fullName" className="input p-2" />
                  </div>
              </div>
  
              <div className="flex items-center gap-2 justify-between phone:flex-col">
                  <div className="flex flex-col gap-1">
                      <label className="uppercase label" htmlFor="">gender</label>
                      <select onChange={handleChange} name="gender" id="gender" className="input w-full">
                          <option value="">-- SELECT GENDER --</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                      </select>
                  </div>
                  <div className="flex flex-col gap-1">
                      <label className="uppercase label" htmlFor="">convention center</label>
                      <input onChange={handleChange} type="text" name="conventioncenter" id="conventioncenter" className="input p-2" />
                  </div>
              </div>
  
              <div className="flex items-center gap-2 justify-between phone:flex-col">
                  <div className="flex flex-col gap-1">
                      <label className="uppercase label" htmlFor="">Date of birth</label>
                      <input onChange={handleChange} type="date" name="" id="dob" className="input p-2" />
                  </div>
                  <div className="flex flex-col gap-1">
  
                  </div>
              </div>           
  
              <button onSubmit={handleSubmit} className="flex items-center justify-center w-full bg-main-color hover:bg-main-color-dark text-white py-[10px] px-[15px] outline-none border-none rounded-2xl">
                  Register
              </button>
  
          </form>
  
        </div>
      </div>
    )
  }
  
  export default HolyGhostPrayerMovement
  