import { useState } from 'react'
import PrayerRequest from './PrayerRequest'
import Consultation from './Consultation'

function ConsultationCategory() {
    const stateCategory = [
        {
            name: 'Payer Request',
            slug: 'prayerrequest'
        },
        {
            name: 'Consultation',
            slug: 'consultation'
        }
    ]

    const [ catState, setCatState ] = useState(stateCategory[0]?.slug)

    const changeCategory = (item) => {
        setCatState(item)
    }
      

  return (
    <div className="w-full">
        <div className="w-full pad1 bg-main-color flex items-center justify-center gap-[2px] flex-wrap tablet:text-[14px]">
            {
                stateCategory.map((item, idx) => (
                    <div key={idx} onClick={() => changeCategory(item.slug)} className={`cursor-pointer flex flex-1 items-center justify-center border-b-[4px] ${item?.slug === catState ? 'border-b-white' : 'border-b-transparent'} hover:border-b-white ${item.slug === catState ? 'text-white' : 'text-text-white'} hover:text-white`}>
                        <p className={`text-center font-semibold text-[24px] phone:text-[16px] `}>{item.name}</p>
                    </div>
                ))
            }
        </div>

        <div className="w-full pad1 mt-12 mb-8">
            {
                catState === 'prayerrequest' && (
                    <PrayerRequest />
                )
            }
            {
                catState === 'consultation' && (
                    <Consultation />
                )
            }
        </div>

    </div>
  )
}

export default ConsultationCategory
