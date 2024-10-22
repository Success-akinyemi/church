import { MdAddShoppingCart } from "react-icons/md";
import { MdOutlineViewTimeline } from "react-icons/md";

function Product({data}) {
    function truncateText(text, maxLength) {
        if (text?.length <= maxLength) {
            return text;
        }
    
        const truncated = text?.slice(0, maxLength);
        const lastSpaceIndex = truncated?.lastIndexOf(' ');
        
        // Adjust to the last space to avoid cutting off in the middle of a word
        const result = lastSpaceIndex > -1 ? truncated.slice(0, lastSpaceIndex) : truncated;
    
        return result + '...';
    }


    function calculateDiscountedPrice(originalPrice, discountPercentage) {
        const discountAmount = (originalPrice * discountPercentage) / 100;
        
        const discountedPrice = originalPrice - discountAmount;
        
        return discountedPrice.toFixed(2);
    }

    const discountPayableAmount = calculateDiscountedPrice(data?.price, data?.discountPercernt)

  return (
    <div className="w-[450px] phone:w-[94%] overflow-hidden shadow-xl rounded-[8px]">
        <div className="w-full relative overflow-hidden">
            <img alt={data?.name} src={`${data.img}`} className={`absolute w-full top-0 left-0`} />
        </div>

        <div className="flex w-full flex-col p-6">
            <div className="flex items-center gap-1 justify-between">
                <h3 className="text-text-color-2 font-semibold text-[21px]">{truncateText(data?.name, 10)}</h3>
                <div>
                    {
                        data?.allowDiscount ? (
                            <span className="flex gap-[2px]">
                                <small className="text-text-color-2 line-through text-[15px] font-semibold">${data?.price}</small>
                                <p className="text-color-1 font-bold text-[18px]" >
                                    ${discountPayableAmount}
                                </p>
                            </span>
                        ) : (
                            <span className="text-color-1 font-bold text-[18px]">
                                ${data.price}
                            </span>
                        )
                    }
                </div>
            </div>

            <div className="flex items-center justify-between text-text-color-3">
                <span>{truncateText(data?.authour, 15)}</span>
                <span>{data?.type}</span>
            </div>

            <hr className="w-full border-[1px] rounded-[10px] border-text-color-3 my-4" />
            
            <div className="flex gap-3">
                <div className="w-full p-2 rounded-[12px] font-font-2 text-[19px] phone:text-[16px] bg-main-color cursor-pointer duration-500 hover:bg-main-color-dark text-white font-semibold flex gap-1 items-center justify-center text-center">
                    <MdAddShoppingCart />
                    Add To Cart
                </div>

                <div className="w-full p-2 rounded-[12px] font-font-2 text-[19px] phone:text-[16px] bg-main-color cursor-pointer duration-500 hover:bg-main-color-dark text-white font-semibold flex gap-1 items-center justify-center text-center">
                    <MdOutlineViewTimeline />
                    Quick View
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Product