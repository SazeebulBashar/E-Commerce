import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCartitems } from '../features/cartitems/CartitemSlice';

function CartScreen() {
  const cart = useSelector((state) => state.cart.value);
  const {id,qty} = useParams();

  const items = useSelector((state) => state.cartitem);
  const dispatch = useDispatch();
  console.log(items);

  useEffect(() => {
    dispatch(fetchCartitems());
  },[]);

  return (
    <>
      <div>ID: {id}, Quantity: {qty} </div>
      {/* {items.map((item) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>{item.qty}</div>
          <div>{item.price}</div>
        </div>
      ))}  */}
    </>
  )
}

export default CartScreen;