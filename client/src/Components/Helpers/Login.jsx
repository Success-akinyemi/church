import { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import Button from "./Button";

function Login({setSelectedCard}) {
    const [ formData, setFormData ] = useState({})

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }
    const [ showPassword, setShowPassword ] = useState(false)

    const togglePassword = () => {
        setShowPassword((prev) => !prev)
    }

    const handleLogin = () => {

    }

  return (
    <div className="flex flex-col gap-8" >
         <div className="inputGroup">
            <label className="label font-semibold" >Email:</label>
            <input type="email" id="email" onChange={handleChange} placeholder="Enter Email Address" className="input" />
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

        <div onClick={() => setSelectedCard('forgotPassword')} className="text-main-color cursor-pointer text-[19px] phone:text-[16px]">
            Forgot Password?
        </div>

        <Button onClick={handleLogin} text={'Login'}  />
    </div>
  )
}

export default Login