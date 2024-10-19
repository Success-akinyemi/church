import React from 'react'

function Banner({img, video, alt}) {
  return (
    <div className='w-full h-[50vh] relative'>
        {
          img && (
            <img alt={alt} src={img} className='w-full h-full object-cover object-center' />
          )
        }

        {
          video && (            
          <video src={video} autoPlay muted 
            className='w-full h-full object-cover object-center'>

          </video>
          )
        }
        <div className='absolute pad1 w-full h-full z-20 bg-transparent-bg left-0 top-0 flex flex-col justify-cente'>

        </div>

    </div>
  )
}

export default Banner