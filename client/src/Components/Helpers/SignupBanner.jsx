import React, { useState } from 'react'
import Button from './Button'

function SignupBanner() {
  const [ formData, setFormData ] = useState({})
  const [ errorText, setErrorText ] = useState()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }
  const handleSubscribe = async () => {
    if(!formData.firstName){
      setErrorText('Enter your First name')
      setTimeout(() => {
        setErrorText()
      }, 2000)
    }
    if(!formData.lastName){
      setErrorText('Enter your Last name')
      setTimeout(() => {
        setErrorText()
      }, 2000)
    }
    if(!formData.email){
      setErrorText('Enter your email address')
      setTimeout(() => {
        setErrorText()
      }, 2000)
    }
    try {
      
    } catch (error) {
      
    }
  }

  return (
    <div className='w-full bg-text-color-3 flex items-center justify-center p-8'>
        <div className="pad1">
            <form className='flex flex-col items-center justify-center gap-5 text-white'>
              <h2 className='text-[28px] tablet:text-[21px] phone:text-[19px] text-center'>Sign up to receive life changing hope and encouragement!</h2>
              <div className='flex items-center justify-center small-pc:flex-col gap-3 small-pc:w-full phone:w-full'>
                <div className="inputGroup">
                  <input onChange={handleChange} type="text" id='firstName' placeholder='First Name'className='text-[17px] p-2 border-none text-text-color-2 outline-none' />
                </div>
                <div className="inputGroup">
                  <input onChange={handleChange} type="text" id='lastName' placeholder='Last Name' className='text-[17px] p-2 border-none text-text-color-2 outline-none' />
                </div>
                <div className="inputGroup">
                  <input onChange={handleChange} type="email" id='email' placeholder='Email Address' className='text-[17px] p-2 border-none text-text-color-2 outline-none' />
                </div>

                {/**ERROR TEXT */}
                  <Button onClick={handleSubscribe} text={'Sign up'} style={'uppercase transition-all duration-200 p-1'} />
              </div>
                <p className='font-bold text-main-color '>
                  { errorText ? (errorText) : ''}
                </p>
              <small className='text-[14px] pad1'>
                *By submitting this form, you consent to receive emails from Joel Osteen Ministries. We respect your privacy and will handle your information in accordance with our TOS/Privacy Policy. You can unsubscribe at any time.
              </small>
            </form>
        </div>
    </div>
  )
}

export default SignupBanner
