import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/productSlice';
import cartReducer from '../features/cart/cartSlice';
import cartitemReducer from '../features/cartitems/CartitemSlice';

export default configureStore({
  reducer: {
    products : productReducer,
    cart : cartReducer,
    cartitems : cartitemReducer,
  }
});