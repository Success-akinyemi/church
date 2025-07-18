import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products:[],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            const existingProduct = state.products.find(item => item.product_id === action.payload.id);
        
            if (existingProduct) {
                // If the product already exists, increase its quantity
                existingProduct.quantity += action.payload.quantity;
            } else {
                // If it's a new product, add it to the cart
                state.products.push(action.payload);
                state.quantity += 1;
            }
        
            // Recalculate the total based on the updated products
            state.total = state.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
        },
        updateQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const productIndex = state.products.findIndex((item) => item.product_id === productId);
      
            if (productIndex !== -1) {
              // Create a new object to avoid mutating the existing state
              const updatedProduct = { ...state.products[productIndex], quantity };
              
              // Replace the old product with the updated product in the products array
              state.products = [
                ...state.products.slice(0, productIndex),
                updatedProduct,
                ...state.products.slice(productIndex + 1)
              ];
      
              // Recalculate the total based on the updated products
              state.total = state.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
            }
        },
        removeFromCart: (state, action) => {
            const idx = action.payload;
            const removeProduct = state.products[idx]

            state.products = state.products.filter((item, index) => index !== idx);
            state.quantity -= removeProduct.quantity;
            state.total -= removeProduct.price * removeProduct.quantity;
        },
        clearCart: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }
    }
})

export const { addProduct, updateQuantity, clearCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer