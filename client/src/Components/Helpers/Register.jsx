import { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import Button from "./Button";

function Register() {
    const [ formData, setFormData ] = useState({})

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }
    const [ showPassword, setShowPassword ] = useState(false)

    const togglePassword = () => {
        setShowPassword((prev) => !prev)
    }

    const handleRegister = () => {

    }

  return (
    <div className="flex flex-col gap-4">
        <div className="inputGroup">
            <label className="label font-semibold" >Name:</label>
            <input id="name" onChange={handleChange} type="text" placeholder="Enter Name" className="input" />
        </div>

        <div className="inputGroup">
            <label className="label font-semibold" >Email:</label>
            <input id="email" onChange={handleChange} type="email" placeholder="Enter Email Address" className="input" />
        </div>

        <div className="inputGroup">
            <label className="label font-semibold" >Password</label>
            <div className="relative flex w-full">
                <input id="password" onChange={handleChange} type={showPassword ? 'text' : 'password'} placeholder="Enter Password" className="input" />
                <div onClick={togglePassword} className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2">
                    {
                        showPassword ? (
                            <IoIosEye className="text-[28px] phone:text-[28px]" />
                        ) : (
                            <IoIosEyeOff className="text-[28px] phone:text-[28px]" />
                        )
                    }
                </div>
            </div>
        </div>
        
        <Button onClick={handleRegister} text={'Create Account'} />
    </div>
  )
}

export default Register
