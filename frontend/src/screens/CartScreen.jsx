import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function CartScreen() {
  const cart = useSelector((state) => state.cart.value);
  const {id,qty} = useParams();
  return (
    <>
      <h1>Items : {cart} </h1>
      <h1>ID : {id} qty : {qty} </h1>
    </>
  )
}

export default CartScreen;