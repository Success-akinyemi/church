import React, { useState } from 'react'
import Testimonials from './ResourcesUi/Testimonials'
import Gallery from './ResourcesUi/Gallery'

function ResourcesComponents() {

    const subMenu = [
        {
            link: 'Gallery',
            slug: 'gallery'
        },
        {
            link: 'Testimonials',
            slug: 'testimonials'
        },
        {
            link: 'Video Teachings',
            slug: 'videoteachings'
        }
    ]
    const [ catState, setCatState ] = useState(subMenu[0].slug)

    const changeCategory = (item) => {
        setCatState(item)
    }

  return (
    <div className='w-full'>
        <div className="w-full pad1 bg-main-color flex items-center justify-center gap-[2px] flex-wrap tablet:text-[14px]">
            {
                subMenu.map((item, idx) => (
                    <div key={idx} onClick={() => changeCategory(item.slug)} className={`cursor-pointer flex flex-1 items-center justify-center border-b-[4px] ${item?.slug === catState ? 'border-b-white' : 'border-b-transparent'} hover:border-b-white ${item.slug === catState ? 'text-white' : 'text-text-white'} hover:text-white`}>
                        <p className={`text-center font-semibold text-[24px] phone:text-[20px] `}>{item.link}</p>
                    </div>
                ))
            }
        </div>

        <div className='w-full pad1 mt-12 mb-5'>
            {
                catState === 'gallery' && (
                    <Gallery />
                )
            }
            {
                catState === 'testimonials' && (
                    <Testimonials />
                )
            }
            {
                catState === '' && (
                    ''
                )
            }
        </div>
      
    </div>
  )
}

export default ResourcesComponents
