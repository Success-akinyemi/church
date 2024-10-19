import { useState } from "react"
import { category } from "../data/store"
import FeatureProducts from "./FeatureProducts"

function StoreCategory() {
    const productsCategory = category
    const [ catState, setCatState ] = useState('featured')

    const changeCategory = (item) => {
        setCatState(item)
    }

  return (
    <div className="w-full">
        <div className="w-full pad1 bg-transparent-bg flex items-center gap-[2px] ">
            <div onClick={() => changeCategory('featured')} className={`cursor-pointer flex flex-1 items-center justify-center border-b-[4px] ${catState === 'featured' ? 'border-b-main-color' : 'border-b-transparent'} hover:border-b-main-color ${catState === 'featured' ? 'text-main-color' : 'text-text-color-2'} hover:text-main-color`}>
                    <p className={`text-center font-semibold text-[24px] phone:text-[20px] `}>Featured</p>
            </div>
            {
                productsCategory.map((item, idx) => (
                    <div key={idx} onClick={() => changeCategory(item.slug)} className={`cursor-pointer flex flex-1 items-center justify-center border-b-[4px] ${item?.slug === catState ? 'border-b-main-color' : 'border-b-transparent'} hover:border-b-main-color ${item.slug === catState ? 'text-main-color' : 'text-text-color-2'} hover:text-main-color`}>
                        <p className={`text-center font-semibold text-[24px] phone:text-[20px] `}>{item.name}</p>
                    </div>
                ))
            }
        </div>

        <div className="w-full pad1 mt-12">
            {
                catState === 'featured' && (
                    <FeatureProducts data={productsCategory} setCatState={setCatState} />
                )
            }
            {
                catState === 'books' && (
                    <div>
                        books
                    </div>
                )
            }
            {
                catState === 'music' && (
                    <div>
                        music
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default StoreCategory