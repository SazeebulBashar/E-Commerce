import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function CartScreen() {
  const cart = useSelector((state) => state.cart.value);
  const {id,qty} = useParams();
  return (
    <>
      <div>ID: {id}, Quantity: {qty} </div>
    </>
  )
}

export default CartScreen;