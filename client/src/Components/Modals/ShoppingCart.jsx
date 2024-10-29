import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart, updateQuantity } from "../../redux/cart/cartSlice";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { CgRemove, CgAdd } from "react-icons/cg";


function ShoppingCart() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const [ formData, setFormData ] = useState({})
  console.log('CART',cart.products)

  const handleQuantity = (type, productId) => {
    const productIndex = cart.products.findIndex((item) => item._id === productId);

    if (productIndex !== -1) {
      const currentQuantity = cart.products[productIndex].quantity;
      const newQuantity = type === 'dec' ? Math.max(currentQuantity - 1, 1) : currentQuantity + 1;

      // Dispatch the updateQuantity action
      dispatch(updateQuantity({ productId, quantity: newQuantity }));
    }
  };

  const handleRemoveFromCart = (idx) => {
    dispatch(removeFromCart(idx))
  }



  return (
    <div className="flex flex-col items-center max-h-[85vh] overflow-y-auto">
      <h3 className="focusText border-b-0 text-left w-full text-[24px] phone:text-[20px]">View Cart</h3>
      
      <p className="text-text-color-2 font-semibold text-[19px] mt-2">
        Cart subtotal ({cart.products?.length} Items): ${Number(cart.total).toFixed(2).toLocaleString()}
      </p>
      
      <div className="mt-5">
      {
                        cart.products.length <= 0 ? (
                            <div className="flex flex-col items-center justify-center" >
                                <span><MdOutlineRemoveShoppingCart className="text-[35px] text-main-color" /></span>
                                <p className="text-[20px] font-bold mt-3 text-text-color-2">Your Cart is Empty</p>
                            </div>
                        ) : (
                            cart.products?.map((item, idx) => (
                                <div key={idx} className="card">
                                    <div className="w-[25%]">
                                        <img src={item?.img} alt={`${item?.name}`} />
                                    </div>
                                    <div className="info">
                                        <span>Product: <p>{item?.name}</p></span>
                                        <span style={{ fontSize: '14px'}}>ID: <p>{item?._id}</p></span>


                                    </div>
                                    <div className="price">
                                        <div className="quantity">
                                            <p className='title'>Quantity:</p>
                                            <div className='q-card'>
                                                <button onClick={() => handleQuantity('dec', item?._id)} className='qbtn'><CgRemove className='icon' /></button>
                                                <span className="number">{item?.quantity}</span>
                                                <button onClick={() => handleQuantity('inc', item?._id)} className='qbtn'><CgAdd className='icon' /></button>
                                            </div>
                                        </div>

                                        <span className="amount">
                                            NGN {item?.price * item?.quantity}
                                        </span>
                                        
                                        <button onClick={() => handleRemoveFromCart(idx)} className='bg-black text-white rounded-[4px] hover:bg-transparent hover:text-black'>
                                            Remove from cart
                                        </button>
                                    </div>
                                </div>
                            ))
                        )
                    }
      </div>

      <hr className="w-full border-2 mt-8 mb-2" />

      <div className="flex items-center gap-4">
        <a href="" className="link border-2 border-main-color text-main-color hover:bg-main-color hover:text-white duration-500 rounded-[4px] p-3">Continue Shopping</a>
        {
          cart.products.length > 0 && (
            <div className="border-2 b border-main-color text-color-1 bg-main-color hover:bg-transparent hover:text-main-color duration-500 rounded-[4px] p-3 cursor-pointer">
              Proceed to Checkout
            </div>
          )
        }
      </div>


    </div>
  )
}

export default ShoppingCart