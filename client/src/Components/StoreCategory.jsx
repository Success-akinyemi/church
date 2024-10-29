import { useState } from "react"
import { category, product } from "../data/store"
import FeatureProducts from "./FeatureProducts"
import Products from "./Helpers/Products"

function StoreCategory() {
    const productsCategory = category
    const [ catState, setCatState ] = useState('featured')

    const changeCategory = (item) => {
        setCatState(item)
    }

    const allProducts = product
    const sortedProducts = allProducts.filter((productItem) => productItem.slug === catState);

    let catProduct = []

  return (
    <div className="w-full">
        <div className="w-full pad1 bg-main-color flex items-center justify-center gap-[2px] flex-wrap tablet:text-[14px]">
            <div onClick={() => changeCategory('featured')} className={`cursor-pointer flex flex-1 items-center justify-center border-b-[4px] ${catState === 'featured' ? 'border-b-white' : 'border-b-transparent'} hover:border-b-white ${catState === 'featured' ? 'text-white' : 'text-text-white'} hover:text-white`}>
                    <p className={`text-center font-semibold text-[24px] phone:text-[20px] `}>Featured</p>
            </div>
            {
                productsCategory.map((item, idx) => (
                    <div key={idx} onClick={() => changeCategory(item.slug)} className={`cursor-pointer flex flex-1 items-center justify-center border-b-[4px] ${item?.slug === catState ? 'border-b-white' : 'border-b-transparent'} hover:border-b-white ${item.slug === catState ? 'text-white' : 'text-text-white'} hover:text-white`}>
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
                    <Products data={sortedProducts} pagination={true} noPerPage={2} />
                )
            }
            {
                catState === 'music' && (
                    <Products data={sortedProducts} pagination={true} noPerPage={2} />
                )
            }
            {
                catState === 'series' && (
                    <Products data={sortedProducts} pagination={true} noPerPage={2} />
                )
            }
                        {
                catState === 'gift' && (
                    <Products data={sortedProducts} pagination={true} noPerPage={2} />
                )
            }
        </div>
    </div>
  )
}

export default StoreCategory